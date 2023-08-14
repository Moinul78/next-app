import Link from "next/link";
import About from "./about";

export default function AboutUs() {
  return (
    <div>
      <h1 className="text-center text-xl py-12 bg-blue-900">This is about from next <Link className=" bg-red-900 rounded-lg p-2" href="/">Go Home</Link></h1>
      <About />
    </div>
  )
}