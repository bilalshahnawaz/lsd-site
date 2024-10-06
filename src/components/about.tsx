"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {

    return (
        <motion.section className="max-w-[45rem] text-center leading-8 sm:mt-0 mt-8"
            id="about"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <SectionHeading>About Us</SectionHeading>
            <p className="mb-3">
                Where innovation meets creativity in the heart of <span className="font-medium">Toronto, Ontario!</span> As a burgeoning video game development studio, we are passionate about crafting immersive digital experiences that captivate, entertain, and inspire. At Lavine Software Development, we believe that video games are more than just entertainment; they are digital art forms that offer unparalleled experiences. Our mission is to push the boundaries of what video games can be by leveraging cutting-edge technologies, innovative design, and storytelling depth to create games that leave a lasting impact on players around the globe. We are committed to quality, innovation, and creating games that resonate. Join us on this exciting journey as we continue to explore new horizons in the world of gaming.
            </p>
        </motion.section>
    )
}