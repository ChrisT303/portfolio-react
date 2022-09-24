import applications from "../data/ProjectData";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";

const Work = () => (
  <div className="w-full md:h-screen text-[#D1d7E0] bg-[#31708E]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-[#D1d7E0] border-[#66b2b2]">
          Portfolio
        </p>
      </div>
      <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4">
        {applications.map((app) => (
          <div key={app.key}>
            <div className="hovereffect">
              <img src={app.src} alt="{app.name}" />
              <div className="overlay">
                <h2 className="text-center">{app.name}</h2>
                <a href={app.desc} className="info">
                  <div className="flex justify-center">
                    <FaGithub />
                  </div>
                </a>
                <a className="info" href={app.link}>
                  <div className='flex justify-center'>
                    <HiOutlineLink />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Work;
