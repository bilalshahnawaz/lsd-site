import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data/posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const [date, ...titleParts] = fileName.replace(/\.md$/, '').split('-');
    const title = titleParts.join(' ');

    return {
      id: fileName.replace(/\.md$/, ''), // Use file name as UUID
      date,
      title: matterResult.data.title || title, // Use title from front matter if available
      excerpt: matterResult.data.excerpt,
      content: matterResult.content,
      pinned: matterResult.data.pinned || false, // Add pinned property
      author: matterResult.data.author || 'Unknown', // Add author property
      fileName: fileName.replace(/\.md$/, ''), // Remove the .md extension
    };
  });

  return allPosts;
}

export function getPostById(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
    excerpt: matterResult.data.excerpt,
    pinned: matterResult.data.pinned || false,
    author: matterResult.data.author || 'Unknown', // Add author property
  };
}