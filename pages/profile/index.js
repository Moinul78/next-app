import { useAuth } from "../../context/AuthProvider";
import PrivateLayout from "../../layouts/PrivateLayout";
import PublicLayout from "../../layouts/PublicLayout";


export default function Profile() {
  // Fetch the user client side
  const { user } = useAuth({ redirectTo: '/login' });

  // server-render loading state
  if (!user) {
    return <PublicLayout>loading...</PublicLayout>
  }
  return (
    <PrivateLayout>
      <p>
        This is your profile Mr. <span>{user.name}</span>
      </p>
    </PrivateLayout>
  )
}