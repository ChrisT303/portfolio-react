// import "./Work.css";
import applications from "./work.json";

const Work = () => (
  <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-800">Portfolio</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {applications.map((app) => (
          <div key={app.key} className="w-full">
            <img src={app.img} alt="{app.name}" />
            <div className="description">
              <h2>{app.name}</h2>
              <h4>{app.desc}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Work;
