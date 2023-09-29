import applications from "../data/ProjectData";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

const Work = () => (
  <div className="w-full md:h-screen text-white bg-eyes bg-cover bg-center">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-white custom-outline bdr">
          Portfolio
        </p>
      </div>
      <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4">
        {applications.map((app) => (
          <div key={app.key} className="hovereffect">
            <div className="text-center">
              {/* App name on top of the image */}
              <h2 className="font-bold md:hidden">{app.name}</h2>
              <img className="project-image" src={app.src} alt={app.name} />
            </div>
            <div className="overlay grid grid-cols-3 pt-4">
              {/* Title (app name) for large screens */}
              <h2 className="font-bold hidden md:block col-span-3 text-center">
                {app.name}
              </h2>
              {/* Links centered below the image */}
              <div className="col-span-3 text-center mb-4 md:mb-0">
                <div className="flex justify-center space-x-4">
                  <a href={app.code} className="info">
                    <div className="flex justify-around text-2xl hover:text-[#6cc644]">
                      <FaGithub />
                    </div>
                  </a>
                  <a className="info" href={app.link}>
                    <div className="flex justify-around text-2xl hover:text-[#dE73FF]">
                      <HiOutlineLink />
                    </div>
                  </a>
                </div>
              </div>
              {/* Tech names over the image */}
              <div className="col-span-3 text-center">
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

export default Work;




