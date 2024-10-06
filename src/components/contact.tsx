"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/contact", { name, email, message })
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4 mb-14 mt-8 sm:mt-0" id="contact">
      <SectionHeading className="text-center mb-20">Contact Us</SectionHeading>
      <motion.div
        className="bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <motion.button
              type="submit"
              className="flex justify-center py-3 px-7 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-br from-green-500 via-teal-600 to-blue-500 hover:from-teal-500 hover:via-blue-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ease-in-out mx-2 mt-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <motion.div className="ml-2">
                <FaPaperPlane className="opacity-70 text-[1.35rem] group-hover:translate-x-1 transition" />
              </motion.div>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;