import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPosts, getPostById } from '@/lib/posts';

const BlogPost = ({ post }) => {
  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params.id as string);
  return { props: { post } };
};

export default BlogPost;