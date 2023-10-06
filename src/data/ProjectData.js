import Libro from '../assets/Libro3.png'
import JobJot from '../assets/JobJotSS.png'
import Bored from '../assets/bored.png'



const applications = [
  {
    key: 1,
    name: "Chairman of the Bored",
    src: Bored,
    code: "https://github.com/deftonechris/Chairman-of-the-Bored-v2-nextjs",
    link: "https://chairman-teal.vercel.app/",
    tech: ["Next.js", "Node.js", "MongoDB", "GraphQL", "TailwindCSS"],

  },
  {
    key: 2,
    name: "JobJot",
    src: JobJot,
    code: "https://github.com/deftonechris/JobJot",
    link: "https://jobjot.vercel.app/landing",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],

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

