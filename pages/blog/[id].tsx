import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostById } from '@/lib/posts'; // Make sure to implement getAllPosts and getPostById
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // For handling raw HTML in markdown
import rehypePrism from 'rehype-prism'; // Optional for syntax highlighting (if using code blocks)

const BlogPost = ({ post }) => {
  return (
    <section className="w-full max-w-4xl mx-auto p-4 mb-8 mt-8 sm:mt-0" id="blog-post">
      <motion.article
        className="relative p-6 border rounded-lg shadow-md bg-gray-800 mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-4 text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.p
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {post.date} | {post.author}
        </motion.p>
        <motion.div
          className="prose prose-lg max-w-none text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]} // Support for GitHub-Flavored Markdown
            rehypePlugins={[rehypeRaw, rehypePrism]} // Handling raw HTML and syntax highlighting
          >
            {post.content}
          </ReactMarkdown>
        </motion.div>
        {post.pinned && <FaStar className="absolute top-4 right-4 text-yellow-500" />}
      </motion.article>

      <div className="flex justify-center mt-8">
        <Link
          href="/blog/"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-95 transition-all ease-in-out cursor-pointer"
        >
          Back to Dispatch
        </Link>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(); // Fetch all post data
  const paths = posts.map((post) => ({
    params: { id: post.id }, // Create dynamic routes based on post IDs
  }));

  return { paths, fallback: false }; // Fallback is false to return 404 for undefined routes
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return { notFound: true }; // Return 404 if no params are found
  }

  const post = getPostById(params.id as string); // Fetch post data by ID
  return { props: { post } }; // Pass post data as props
};

export default BlogPost;
