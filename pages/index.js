import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-10">Hello, Next.js!</h1>
      <div className="flex justify-center items-center gap-10 mt-10">
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/about">Go to about</Link>
        <Link className="p-4 bg-blue-900 rounded-lg hover:bg-blue-500" href="/category">Go to category</Link>
      </div>
    </>
  )
}