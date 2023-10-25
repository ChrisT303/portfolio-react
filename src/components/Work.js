import React, { useState } from 'react';
import applications from '../data/ProjectData';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProject = (key, event) => {
    if (event) {
      event.stopPropagation();
    }
  
    if (window.innerWidth < 768) {
      if (selectedProject === key) {
        setSelectedProject(null);
      } else {
        setSelectedProject(key);
      }
    }
  };

  return (
    <div className="relative w-full h-screen text-white bg-eyes bg-cover bg-center">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white border-[#30D5C8]">
            Portfolio
          </p>
        </div>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div key={app.key} className="project-card" onClick={() => toggleProject(app.key)}>
              <div className="text-center">
              <img className="project-image h-48 sm:h-80 md:h-64 lg:h-96" src={app.src} alt={app.name} />
              </div>
              <div className={`overlay ${selectedProject === app.key ? 'show' : ''}`}>
                <h2 className="font-bold text-center mb-4">{app.name}</h2>
                <div className="text-center mb-4 md:mb-0">
                  <div className="flex justify-center space-x-4">
                    <a href={app.code} className="info mb-4">
                      <FaGithub className="text-2xl hover:text-[#6cc644]" />
                    </a>
                    <a className="info" href={app.link}>
                      <HiOutlineLink className="text-2xl hover:text-[#dE73FF]" />
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <div className="tech-container">
                    {app.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-main text-white custom-outline font-extrabold py-1 px-2 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;





