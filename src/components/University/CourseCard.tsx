import React from "react";

interface Course {
  code: string;
  name: string;
  instructor: string;
  schedule: string;
  credits: number;
}

interface CourseCardProps {
  course: Course;
  onClick?: (courseCode: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  const handleClick = () => {
    onClick?.(course.code);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
          {course.code}
        </span>
        <span className="text-sm text-gray-500">{course.credits} Credits</span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        {course.name}
      </h3>
      <p className="mb-2 text-sm text-gray-600">{course.instructor}</p>
      <p className="text-sm text-gray-500">{course.schedule}</p>
    </div>
  );
};

export default CourseCard;
