import Link from "next/link";
import { useContext, useState } from "react";
import { useGlobalContext } from "../../context/context";

const CourseCard = ({ course: { id, title, img, description, fee } }) => {
  const [fullTxt, setFullTxt] = useState(false);
  const { user } = useGlobalContext();
  console.log("user", user);
  return (
    <div className="relative w-full sm:max-w-sm rounded-xl overflow-hidden shadow-md">
      <img className="w-full" src={img} alt={title} />
      <div className="p-5 flex flex-col gap-3 pb-14">
        <h3 className="text-xl font-semibold text-center text-black">{title}</h3>
        <p>{description.length > 100 ? fullTxt ? <> {description}<button className="text-blue-900 hover:text-black ml-1" onClick={() => setFullTxt(false)}> (See Less)</button> </> :
          <>{description.slice(0, 100)}<button className="text-blue-600 hover:text-black" onClick={() => setFullTxt(true)}>...See More</button></> : description}</p>
        <Link href={`/courses/${id}`}>
          <div className="absolute bottom-3 right-5 left-5 flex justify-between items-center">
            <h4 className="text-lg font-semibold">${fee}</h4>
            <button className="btn btn-primary">See Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;