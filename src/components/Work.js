import applications from "../data/ProjectData";

import { HiOutlineLink } from "react-icons/hi";

const Work = () => (
  <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-800">
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
                <h4 className="font-bold text-black text-center">{app.desc}</h4>
                <a className="info" href={app.link}>
                  <h3 className="flex justify-center">
                    <HiOutlineLink />
                  </h3>
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
