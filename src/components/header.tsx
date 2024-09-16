"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <motion.ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white sm:w-[initial] sm:flex-nowrap sm:gap-5"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {links.map((link) => (
        <Tab key={link.hash} setPosition={setPosition}>
          <Link 
            className="flex w-full items-center justify-center px-3 py-3 hover:text-white" 
            href={link.hash}
          >
            {link.name}
          </Link>
        </Tab>
      ))}
      <Cursor position={position} />
    </motion.ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer h-3/4 flex items-center justify-center"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-slate-800 md:h-12"
    />
  );
};

export default function Header() {
  return (
    <header className="z-[999] relative">
        <motion.div 
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-sky-950 border-opacity-40 bg-slate-700 shadow-black/[0.10] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
        </motion.div>

        <nav 
            className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        >
            <SlideTabs />
        </nav>
    </header>
  );
}