"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import SectionHeading from "./section-heading";

const Dispatch = () => {
  const [posts, setPosts] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Fetch the recent blog posts
    axios.get("/api/recent-posts").then((response) => {
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
    <section className="w-full max-w-4xl mx-auto p-4 mb-14 mt-8 sm:mt-0">
      <SectionHeading className="text-center mb-16">Recent Dispatch</SectionHeading>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <motion.div
              className="relative p-6 border rounded-lg shadow-md transform transition-all ease-in-out duration-300 hover:bg-slate-800 cursor-pointer mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.01 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
              <p className="text-slate-400 mt-2">{truncate(post.excerpt, 150)}</p>
              <Link href={`/blog/${post.id}`}>
                <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
              </Link>
              {post.pinned && <FaStar className="absolute top-4 right-4 text-yellow-500" />}
            </motion.div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/blog" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 active:scale-100">
          View All
        </Link>
      </div>
      <div className="mt-8 text-center">
        <motion.h2 
            className="text-2xl font-bold mb-4">Join Our Dispatch
            
        </motion.h2>
        <input
          type="email"
          className="w-full max-w-md p-3 border rounded-lg mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full max-w-md p-3 bg-blue-500 text-white rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:scale-110 active:scale-100"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Dispatch;