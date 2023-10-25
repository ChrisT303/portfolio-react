import React from "react";
import Footer from "./Footer";

const Experience = () => {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "GraphQL",
    "Web Application Development",
    "User Interface Design",
    "User Experience Design",
    "Version Control",
    "Problem-Solving",
    "Team Collaboration",
    "Agile/Scrum Methodology",
    "Data Analysis",
    "Software Testing and Debugging",
    "Project Management",
    "Sales and Client Relationship Management",
    "Adaptability and Learning Agility"
  ];

  return (
    <div className="w-full h-screen bg-eyes bg-cover bg-center text-white custom-outline">
      <div className="max-w-[1000px] pt-[20px] sm:pt-[40px] mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 bdr">Skills</p>
          <p className="py-2 sm:py-4">Technologies and skills I have experience with:</p>
        </div>
        <div className="w-full space-y-1 sm:space-y-2 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 text-center py-4 sm:py-8 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="tag bg-gray-700 p-1 sm:p-2 rounded-full hover:bg-gray-600 text-xs sm:text-base">
              {skill}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );

};

export default Experience;



