import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthProvider';
import { useEffect } from 'react';

/**
 * 
 * @param {private} 
 * this function is for private route that will check specifiq role and then redirect the user 
 * @returns 
 */

export default function Private({ children }) {
    const router = useRouter();
    const { user } = useAuth();
    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);
    return user?.role === 'admin' || user?.role === 'super-admin' ? children : null;
}
