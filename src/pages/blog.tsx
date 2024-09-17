import { GetStaticProps } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { getAllPosts } from '../lib/posts';
import { useState } from 'react';

const Blog = ({ posts }) => {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Separate pinned and unpinned posts
  const pinnedPosts = filteredPosts.filter(post => post.pinned);
  const unpinnedPosts = filteredPosts.filter(post => !post.pinned);

  // Sort unpinned posts by date
  const sortedUnpinnedPosts = unpinnedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Blog</h1>
      <input
        type="text"
        className="w-full max-w-2xl p-3 border rounded-lg mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="w-full max-w-2xl space-y-6">
        {pinnedPosts.map((post) => (
          <motion.div
            key={post.id}
            className="relative p-6 border rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
            </Link>
            <FaStar className="absolute top-4 right-4 text-yellow-500" />
          </motion.div>
        ))}
        {sortedUnpinnedPosts.map((post) => (
          <motion.div
            key={post.id}
            className="p-6 border rounded-lg shadow-md bg-white hover:bg-gray-50 transition duration-300"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`}>
              <span className="text-blue-500 mt-4 inline-block cursor-pointer">Read More</span>
            </Link>
          </motion.div>
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