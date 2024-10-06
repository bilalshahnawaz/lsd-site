"use client";
import SectionHeading from "./section-heading"
import { portfolioData } from "@/lib/data"
import { motion } from "framer-motion";
import { RiCompass3Fill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import React from "react";

export default function Portfolio() {

    return (
        <section className="mt-8 sm:mt-0 flex flex-col items-center" id="portfolio">
            <SectionHeading className="mb-2">Portfolio</SectionHeading>
            <div className="w-full">
            {
                portfolioData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))
            }
            </div>
        </section>
    )
}

type ProjectProps = typeof portfolioData[0];

function Project({ title, description, tags, imageUrl, playUrl, discoverMoreUrl }: ProjectProps) {
    return (
      <div className="bg-slate-700 w-full max-w-[50rem] border border-black/5 overflow-hidden sm:rounded-lg flex flex-col-reverse sm:flex-row px-4 sm:px-8 my-8 mx-auto"> 
        <div className="sm:w-1/2 p-4 sm:p-8 flex flex-col items-center justify-center"> 
          <div className="text-center">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-white">{description}</p>
            <div className="flex flex-wrap mt-4 gap-2 justify-center"> 
              {tags.map((tag, index) => (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
                  {tag}
                </li>
              ))}
            </div>
          </div>
          <motion.div className="mt-4 flex gap-4 justify-center">
            <motion.a
              href={discoverMoreUrl}
              className="group bg-gray-900 text-white px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition-all ease-in-out cursor-pointer"
            >
              Discover More 
              <motion.div>
                <RiCompass3Fill className="opacity-70 group-hover:translate-x-1 text-[1.2rem] transition" /> 
              </motion.div>
            </motion.a>
            <motion.a
              href={playUrl}
              target="_blank"
              className="group bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 hover:from-indigo-500 hover:via-indigo-500 hover:to-purple-500 px-7 py-3 flex items-center gap-2 rounded-full shadow outline-none hover:scale-110 active:scale-95 transition-all ease-in-out text-white"
            >
              Play 
              <motion.div>
                <FaPlay className="opacity-70 text-[1.35rem] group-hover:translate-x-1 transition" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center p-4 sm:p-8"> 
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto max-h-full object-cover rounded-t-lg sm:rounded-l-none sm:rounded-r-lg" 
          />
        </div>
      </div>
    );
  }