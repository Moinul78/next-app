import Category from "./Category";
import { useAuth } from '../../context/AuthProvider';
import PrivateLayout from "../../layouts/PrivateLayout";

export default function CategoryPage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <PrivateLayout>
      <div>
        <h1 className="text-center text-xl py-12 bg-blue-900">This is category page</h1>
        <Category />
      </div>
    </PrivateLayout>
  )
}