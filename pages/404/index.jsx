import Link from "next/link";
import PublicLayout from "../../layouts/PublicLayout";

const NotFound = () => {
    return (
        <PublicLayout>
            <div className="card w-full bg-base-100 shadow-xl image-full text-center">
                <img className="w-full" src="https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg" alt="Shoes" />
                <div className="card-body py-12">
                    <h1 className="text-6xl mt-3">Ooops...</h1>
                    <h2>That page can not be found</h2>
                    <p className="my-6">Go back to the <Link href="/home"><strong>HOMEPAGE</strong></Link></p>
                </div>
            </div>
        </PublicLayout>
    );
}

export default NotFound;