import Link from "next/link";
import { useAuth } from "../context/AuthProvider";
import Image from "next/image";

export default function handler() {
  const { user, setUser } = useAuth();

  const handleUser = (res) => {
    setUser({ name: 'Moinul Islam', email: 'moinul@coredevs.ltd', role: 'admin' })
  }
  const handleLogout = () => {
    setUser(null)
  }
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-10">Hello, Next.js!</h1>
      <div className="flex justify-center items-center gap-10 mt-10">
        {/* <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/courses">Courses</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/dashboard">Dashboard</Link> */}
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/about">Go to about</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/category">Go to category</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/courses">Courses</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/profile">Your Profile</Link>

        {
          user
            ? <button className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" onClick={handleLogout}>Logout</button>
            : <button className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" onClick={handleUser}>Login</button>
        }
      </div>
      <div className="flex justify-center items-center mt-12">
        {
          user
            ? <div> <Image
              src="/avatar.jpg"
              alt="Picture of the author"
              width={100}
              height={100}
            /></div>
            : <div>No User</div>
        }
      </div>
    </>
  )
}