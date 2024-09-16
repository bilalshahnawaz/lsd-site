"use client";

import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { RiContactsFill } from "react-icons/ri";
import { FaGithubSquare } from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";

export default function Intro() {
    return (
        <section className="flex flex-col items-center justify-center mt-36 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                className="mb-4"
            >
                <img 
                    src="/lsd-white.png" 
                    className="shadow-xl object-cover border-white"
                />
            </motion.div>
            <motion.span 
                className="text-4xl text-center font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1,
                }}
            >
                Crafting Worlds, Unleashing Imagination
            </motion.span>
            <motion.span 
                className="text-xl text-center mt-2"
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
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-6"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link 
                    href="#contact"
                    className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
                >
                    Contact Us <RiContactsFill /> 
                {" "}
                </Link>
                <Link
                    href="#dispatch"
                    className="bg-white p-4 text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full shadow"
                >
                    Join Our Dispatch <SiMinutemailer />
                </Link>
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}