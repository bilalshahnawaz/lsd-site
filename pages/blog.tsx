"use client";

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { getAllPosts } from '@/lib/posts';
import { useState, useEffect } from 'react';
import SectionHeading from '@/components/section-heading';
import Header from '@/components/header';

// Define the type for a post
interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  pinned: boolean;
}

// Define the type for the props
interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  const [search, setSearch] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Separate pinned and unpinned posts
  const pinnedPosts = filteredPosts.filter(post => post.pinned);
  const unpinnedPosts = filteredPosts.filter(post => !post.pinned);

  // Sort unpinned posts by date
  const sortedUnpinnedPosts = unpinnedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex flex-col items-center px-4 py-24">
      <Header />
      <SectionHeading>Dispatch</SectionHeading>
      <input
        type="text"
        className="w-full max-w-2xl p-3 border rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full max-w-2xl space-y-6">
        {pinnedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            {isClient && (
              <motion.div
                className="relative p-6 border rounded-lg shadow-md transform transition-all ease-in-out duration-300 hover:bg-slate-800 cursor-pointer mb-4"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                <p className="text-slate-400 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
                </Link>
                <FaStar className="absolute top-4 right-4 text-yellow-500" />
              </motion.div>
            )}
          </Link>
        ))}
        {sortedUnpinnedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            {isClient && (
              <motion.div
                className="relative p-6 border rounded-lg shadow-md transform transition-all ease-in-out duration-300 hover:bg-slate-800 cursor-pointer mb-4"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.01 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                <p className="text-slate-400 mt-2">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
                </Link>
              </motion.div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Blog;