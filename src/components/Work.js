import applications from "../data/ProjectData";
import { FaGithub } from "react-icons/fa";
import { HiOutlineLink } from "react-icons/hi";
import Footer from "./Footer";

const Work = () => (
  <div className="w-full md:h-screen text-main bg-eyes bg-cover bg-center">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-main bdr">
          Portfolio
        </p>
      </div>
      <div className="grid mx-auto sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {applications.map((app) => (
          <div key={app.key}>
            <div className="hovereffect">
              <img className="project-image" src={app.src} alt="{app.name}" />
              <div className="overlay grid grid-cols-3 md:inline-block md:grid-cols-none pt-4 md:pt-0">
                <h2 className="font-bold">{app.name}</h2>
                <div className="button-container">
                  <a href={app.code} className="info">
                    <div className="flex justify-around text-2xl md:text-base hover:text-[#6cc644]">
                      <FaGithub />
                    </div>
                  </a>
                  <a className="info" href={app.link}>
                    <div className="flex justify-around text-2xl md:text-base hover:text-[#dE73FF]">
                      <HiOutlineLink />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  </div>
);

export default Work;
