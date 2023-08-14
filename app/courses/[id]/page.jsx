"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { useGlobalContext } from "../../../context/context";

const Course = () => {
  const params = useParams();
  const courseId = params.id;
  const [course, setCourse] = useState({});
  const { getData } = useGlobalContext();
  const data = getData();
  console.log(data);

  useEffect(() => {
    if (courseId) {
      fetch(`/api/course/${courseId}`)
        .then((res) => res.json())
        .then((course) => {
          setCourse(course);
        });
    }
  }, [courseId]);

  const { id, title, img, description, level, duration, categories, prerequisite, fee } = course;

  return (
    <>
      <div className="max-w-7xl mx-auto my-12 sm:my-24">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">{title}</h2>
        <div>
          <p className="my-4">Description: {description}</p>
          <p className="my-4">Level: {level}</p>
          <p className="my-4">Categories: {categories}</p>
          <p className="my-4">PreRequisite: {prerequisite}</p>
          <p className="my-4">Fee: {fee}</p>
          <p className="my-4">Duration: {duration}</p>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default Course;
