"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PrivateLayout from "../../layouts/PrivateLayout";

export default function Course() {
  const router = useRouter();
  const { query: { courseId } } = router;
  const [course, setCourse] = useState({});

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
    <PrivateLayout>
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
    </PrivateLayout>
  );
};
