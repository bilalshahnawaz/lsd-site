"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { RiContactsFill } from "react-icons/ri";
import { FaGithubSquare } from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";

export default function Intro() {
    return (
        <section className="flex flex-col items-center justify-center mt-40 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                className="mb-4"
            >
                <motion.img 
                    src="/lsd-white.png" 
                    className="shadow-xl object-cover border-white"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                    }}
                />
            </motion.div>
            <motion.span 
                className="text-4xl text-center font-bold mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 3,
                }}
            >
                Crafting Worlds, Unleashing Imagination
            </motion.span>
            <motion.span 
                className="text-xl text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 2.5,
                }}
            >
                Where Every Pixel Tells a Story <br /> 
                Dive into the Future of Gaming with Lavine Software Development
            </motion.span>

            <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mt-6"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link 
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all ease-in-out"
                >
                    Contact Us <RiContactsFill className="opacity-70 group-hover:translate-x-1" /> 
                {" "}
                </Link>
                <Link
                    href="#dispatch"
                    className="group bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 hover:from-pink-700 hover:via-purple-600 hover:to-blue-600 px-7 py-3 flex items-center gap-2 rounded-full shadow outline-none hover:scale-110 active:scale-105 transition-all ease-in-out text-white"
                > 
                    Join Our Dispatch <SiMinutemailer className="opacity-70 group-hover:translate-x-1 transition text-[1.35rem]" />
                </Link>
                <a 
                    className="group bg-gradient-to-br from-[#171515] via-white to-[#171515] hover:from-white hover:to-[#171515] outline-none hover:scale-110 active:scale-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full transition-all ease-in-out cursor-pointer"
                    href="https://github.com/Lavine-Software-Development"
                    target="_blank"
                >
                    <FaGithubSquare className="group-hover:scale-120 transition" />
                </a>
            </motion.div>
        </section>
    );
}