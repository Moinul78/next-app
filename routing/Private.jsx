import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthProvider';

export default function Private({ children }) {
    const router = useRouter();
    const { user } = useAuth();
    return user?.role === 'admin' || user?.role === 'super-admin' ? children : router.push('/login');
}
