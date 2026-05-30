import { Projects, Skillset, Badges, About, FloatingMenu, Navbar, Copyright, Home } from "./pages/Controller"
import {BrowserRouter, Routes, Route} from "react-router-dom"


export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects /> } />
          <Route path="/skillset" element={<Skillset />} />
          <Route path="/badges" element={<Badges />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact" element={<></>} />
        </Routes>
      </BrowserRouter>
      <FloatingMenu></FloatingMenu>
      <Copyright></Copyright>
    </>
  )
}
