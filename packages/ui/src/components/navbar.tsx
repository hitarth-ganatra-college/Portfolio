import {ArrowRightIcon} from "@heroicons/react/24/outline"
import { NavLink } from "react-router-dom"
import resume from "@assets/resume.pdf"

export default function Navbar() {
  return (
    <>
      <nav className="h-[8vh] w-full bg-gray-50 shadow-xl px-30 relative z-1000">
        <div className="grid size-full grid-flow-col grid-cols-2">
          <div
            id="title"
            className="flex items-center px-10 text-2xl font-bold"
          >
            <div className="h-15 w-15 bg-[url(/src/assets/logo.png)] bg-cover"></div>
            <div id="name" className="px-5">
              Hitarth Ganatra
            </div>
          </div>
          <div id="menu">
            <ul className="flex h-full items-center justify-center gap-10 px-10 text-lg font-medium">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/projects">Projects</NavLink></li>
              <li><NavLink to="/skillset">Skillset</NavLink></li>
              <li><NavLink to="/badges">Badges</NavLink></li>
              <li><NavLink to="/about-me">About me</NavLink></li>
              <li>
                <button className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-white transition-all duration-300 hover:bg-gray-700 cursor-pointer" onClick={() => window.open(resume, "_blank")}>
                    <span>Check my Resume</span>
                    <ArrowRightIcon className="size-4 inline"/>              
                </button>  
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
