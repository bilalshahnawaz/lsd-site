import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostById } from '@/lib/posts'; // Make sure to implement getAllPosts and getPostById
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // For handling raw HTML in markdown
import rehypePrism from 'rehype-prism'; // Optional for syntax highlighting (if using code blocks)

// Define the type for a post
interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  pinned: boolean;
  author: string; // Add the author property
}

// Define the type for the props
interface BlogPostProps {
  post: Post;
}

const BlogPost = ({ post }: BlogPostProps) => {
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
          className="text-gray-400 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {post.date}
        </motion.p>
        <motion.p
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          By {post.author}
        </motion.p>
        <ReactMarkdown
          className="prose prose-lg text-gray-300"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypePrism]}
        >
          {post.content}
        </ReactMarkdown>
      </motion.article>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }

  const post = getPostById(params.id as string);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default BlogPost;