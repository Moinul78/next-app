import { useRouter } from "next/router"
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

export default function PrivateLayout({ children }) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return <div>{user ? children : null}</div>;
}
