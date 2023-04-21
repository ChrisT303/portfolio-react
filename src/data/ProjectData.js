import Libro from '../assets/Libro3.png'
import JobJot from '../assets/JobJotSS.png'
import ForeSS from '../assets/ForeSS.png'



const applications = [
  {
    key: 1,
    name: "JobJot",
    src: JobJot,
    code: "https://github.com/deftonechris/JobJot",
    link: "https://jobjot.onrender.com/",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],

  },
  {
    key: 2,
    name: "ForeCastaway",
    src: ForeSS,
    code: "https://github.com/deftonechris/ForeCastaway",
    link: "https://fore-castaway-rvp6.vercel.app/",
    tech: ["TypeScript", "Next.js", "TailwindCSS"],

  },
  {
    key: 3,
    name: "LibroMarkit",
    src: Libro,
    code: "https://github.com/deftonechris/LibroMarkIt",
    link: "https://libro-mark-it.vercel.app/",
    tech: ["Next.js", "Node.js", "GraphQL", "MongoDB", "TailwindCSS"],

  },

];



export default applications;

