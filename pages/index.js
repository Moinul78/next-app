import Link from "next/link";
import { useAuth } from "../context/AuthProvider";

export default function handler() {
  const { user, setUser } = useAuth();

  const handleUser = (res) => {
    setUser({ name: 'Moinul Islam', email: 'moinul@coredevs.ltd' })
  }
  const handleLogout = () => {
    setUser(null)
  }
  console.log(user);
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-10">Hello, Next.js!</h1>
      <div className="flex justify-center items-center gap-10 mt-10">
        {/* <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/courses">Courses</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/dashboard">Dashboard</Link> */}
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/about">Go to about</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/category">Go to category</Link>
        {
          user
            ? <button className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" onClick={handleLogout}>Logout</button>
            : <button className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" onClick={handleUser}>Login</button>
        }
      </div>
    </>
  )
}