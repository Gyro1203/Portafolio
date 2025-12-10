import NextJS from "../icons/NextJS.astro"
import NodeJS from "../icons/NodeJS.astro"
import JavaScript from "../icons/JavaScript.astro"
import TypeScript from "../icons/TypeScript.astro"
import Express from "../icons/Express.astro"
import ReactIcon from "../icons/React.astro"
import ViteIcon from "../icons/Vite.astro"
import BootstrapIcon from "../icons/Bootstrap.astro"
import TailwindIcon from "../icons/Tailwind.astro"
import CMMIcon from "../icons/CMM.astro"
import CSharpIcon from "../icons/CSharp.astro"
import JavaIcon from "../icons/Java.astro"
import HtmlIcon from "../icons/Html.astro"
import CssIcon from "../icons/Css.astro"
import AstroIcon from "../icons/AstroIcon.astro"
import WordpressIcon from "../icons/Wordpress.astro"
import FlutterIcon from "../icons/Flutter.astro"
import MysqlIcon from "../icons/MySQL.astro"
import MongoIcon from "../icons/Mongo.astro"

const TAGS = {
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-yellow-400/20 border border-yellow-400 text-white",
    icon: JavaScript,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-blue-500/20 border border-blue-500 text-white",
    icon: TypeScript,
  },
  NODE: {
    name: "Node.js",
    class: "bg-green-500/20 border border-green-600 text-white",
    icon: NodeJS,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black border border-neutral-500 text-white",
    icon: NextJS,
  },
  EXPRESS: {
    name: "Express",
    class: "bg-gray-800/70 border border-gray-600 text-white",
    icon: Express,
  },
  REACT: {
    name: "React",
    class: "bg-cyan-400/20 border border-cyan-500 text-white",
    icon: ReactIcon,
  },
  VITE: {
    name: "Vite",
    class: "bg-purple-400/20 border border-purple-500 text-white",
    icon: ViteIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-purple-600/20 border border-purple-700 text-white",
    icon: BootstrapIcon,
  },
  TAILWIND: {
    name: "Tailwind",
    class: "bg-teal-400/20 border border-teal-500 text-white",
    icon: TailwindIcon,
  },
  CMM: {
    name: "C++",
    class: "bg-blue-700/20 border border-blue-800 text-white",
    icon: CMMIcon,
  },
  CSHARP: {
    name: "C#",
    class: "bg-violet-700/20 border border-violet-800 text-white",
    icon: CSharpIcon,
  },
  JAVA: {
    name: "Java",
    class: "bg-orange-400/20 border border-orange-500 text-white",
    icon: JavaIcon,
  },
  HTML: {
    name: "HTML",
    class: "bg-orange-500/20 border border-orange-600 text-white",
    icon: HtmlIcon,
  },
  CSS: {
    name: "CSS",
    class: "bg-blue-400/20 border border-blue-500 text-white",
    icon: CssIcon,
  },
  ASTRO: {
    name: "Astro",
    class: "bg-orange-600/20 border border-orange-700 text-white",
    icon: AstroIcon,
  },
  WP: {
    name: "WordPress",
    class: "bg-blue-700/20 border border-blue-800 text-white",
    icon: WordpressIcon,
  },
  FLUTTER: {
    name: "Flutter",
    class: "bg-sky-400/20 border border-sky-500 text-white",
    icon: FlutterIcon,
  },
  MYSQL: {
    name: "MySQL",
    class: "bg-blue-700/20 border border-blue-900 text-white",
    icon: MysqlIcon,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-green-700/20 border border-green-800 text-white",
    icon: MongoIcon,
  },
}
export default TAGS