"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { FaEnvelope, FaEye, FaStar } from "react-icons/fa";
import SectionHeading from "./section-heading";

const Dispatch = () => {
    const [posts, setPosts] = useState([]);
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Fetch the recent blog posts
        axios.get("/api/recent-posts").then((response) => {
            console.log("Fetched posts:", response.data); // Debugging log
            setPosts(response.data);
        }).catch(error => {
            console.error("Error fetching recent posts:", error);
        });
    }, []);

    const handleSubscribe = () => {
        // Handle email subscription
        axios.post("/api/subscribe", { email }).then((response) => {
            alert("Subscribed successfully!");
        }).catch(error => {
            console.error("Error subscribing:", error);
        });
    };

    const truncate = (str, maxLength) => {
        if (str.length <= maxLength) return str;
        const truncatedStr = str.slice(0, maxLength);
        const lastSpaceIndex = truncatedStr.lastIndexOf(' ');
        return truncatedStr.slice(0, lastSpaceIndex) + '...';
    };

    return (
        <section className="w-full max-w-4xl mx-auto p-4 mb-8 mt-8 sm:mt-0" id="dispatch">
            <SectionHeading className="text-center mb-20">Recent Dispatch</SectionHeading>
            <div className="space-y-4">
                {posts.length === 0 ? (
                    <p className="text-center text-gray-500">No recent posts available.</p>
                ) : (
                    posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`}>
                            <motion.div
                                className="relative p-6 border rounded-lg shadow-md transform transition-all ease-in-out duration-300 hover:bg-slate-800 cursor-pointer mb-4"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.01 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                                <p className="text-slate-400 mt-2">{post.date} | {post.author}</p>
                                <p className="text-slate-400 mt-2">{truncate(post.excerpt, 150)}</p>
                                <Link href={`/blog/${post.id}`}>
                                    <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
                                </Link>
                                {post.pinned && <FaStar className="absolute top-4 right-4 text-yellow-500" />}
                            </motion.div>
                        </Link>
                    ))
                )}
            </div>
            <div className="flex justify-center mt-8 mb-20">
                <Link
                    href="/blog"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition-all ease-in-out cursor-pointer"
                >
                    Dispatch Archive
                    <motion.div>
                        <FaEye className="opacity-70 group-hover:translate-x-1 text-[1.3rem] transition" />
                    </motion.div>
                </Link>
            </div>
            <div className="mt-4 text-center">
                <motion.h2 className="text-2xl font-bold mb-4">Join Our Dispatch</motion.h2>
                <input
                    type="email"
                    className="w-full max-w-md p-3 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex justify-center mt-4 text-center">
                <Link
                    href="#"
                    className="group bg-gradient-to-br from-blue-500 via-indigo-800 to-blue-700 hover:from-indigo-500 hover:via-blue-700 hover:to-indigo-800 px-7 py-3 flex items-center gap-2 rounded-full shadow outline-none hover:scale-110 active:scale-95 transition-all ease-in-out text-white"
                    onClick={handleSubscribe}
                >
                    Stay Connected
                    <motion.div>
                        <FaEnvelope className="opacity-70 text-[1.35rem] group-hover:translate-x-1 transition" />
                    </motion.div>
                </Link>
            </div>
        </section>
    );
};

export default Dispatch;