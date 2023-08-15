import { useRouter } from "next/router";
import { useAuth } from "../context/AuthProvider";

export default function PublicRoute({ children }) {
  const router = useRouter();
  const { checkRole } = useAuth();

  const userHasUserRole = checkRole('user');
  return userHasUserRole ? children : router.push('/login');
}
