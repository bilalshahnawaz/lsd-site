import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allPosts = getAllPosts();

  // Extract pinned and non-pinned posts
  const pinnedPosts = allPosts.filter(post => post.pinned);
  const nonPinnedPosts = allPosts.filter(post => !post.pinned);

  // Sort both arrays by date in descending order (newest first)
  pinnedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  nonPinnedPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Combine the arrays: pinned posts first, followed by non-pinned posts
  const recentPosts = [...pinnedPosts, ...nonPinnedPosts].slice(0, 3);

  // Return the result as a JSON response
  res.status(200).json(recentPosts);
}
