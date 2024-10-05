import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const allPosts = getAllPosts();
  res.status(200).json(allPosts);
}