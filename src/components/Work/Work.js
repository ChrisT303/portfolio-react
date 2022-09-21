import "./Work.css";
import applications from "./work.json";

const Work = () => (
  <div className="applications">
    {applications.map((app) => (
      <div key={app.key} className="appCard">
        <img src={app.img} alt="{app.name}" />
        <div className="description">
          <h2>{app.name}</h2>
          <h4>{app.desc}</h4>
        </div>
      </div>
    ))}
  </div>
);

export default Work;
