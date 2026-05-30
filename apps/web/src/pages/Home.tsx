import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";


const roles = ["Full-Stack Developer", "Agentic AI Developer", "Flutter Developer", "Automation Dev"];

export default function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container grid grid-cols-2 max-h-[87vh] h-[92vh] w-full max-w-full place-items-center">
                <div id="server-graphics" className="flex mask-luminance bg-gray-300 size-full justify-center items-end p-15">

                    {/* Add 3D model here */}

                    <div className="w-45 h-10 rounded-full bg-black animate-bounce mt-10 flex items-center justify-center cursor-pointer">
                        <ArrowDownIcon className="text-white mr-3"/>
                        <p className="text-white text-sm">Click to see magic</p>
                    </div>
                </div>
                <div id="intro" className="size-full flex flex-col justify-center gap-4 px-15 py-60 pb-100">
                    <h1 className="text-2xl font-bold uppercase">Hello there!!</h1>
                    <p className="flex flex-wrap items-center gap-x-2">
                        <span className="w-full pb-5">I'm a</span>
                        <span className="relative inline-block h-20 text-7xl min-w-45">
                            <AnimatePresence mode="sync">
                            <motion.span
                                key={roles[currentRoleIndex]}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="absolute left-0 top-0 whitespace-nowrap text-amber-500 font-bold uppercase"
                            >
                                {roles[currentRoleIndex]}
                            </motion.span>
                            </AnimatePresence>
                        </span>
                        <span className="w-full">
                            And I love creating amazing applications that help reduce people's workload.
                            <br />
                            Based in India.
                        </span>
                    </p>
                    <div id="buttons" className="flex mt-auto gap-6">
                        <Link to="/contact" className="bg-amber-500 text-white px-5 py-2  cursor-pointer hover:bg-amber-600 transition-colors duration-300">
                            Contact me
                        </Link>
                        <Link to="/projects" className="bg-amber-500 text-white px-5 py-2 cursor-pointer hover:bg-amber-600 transition-colors duration-300">
                            See my work
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}