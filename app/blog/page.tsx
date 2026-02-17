import {sanityClient, BLOG_POSTS_QUERY} from '../lib/sanity/client';
import type {BlogPost} from '../types/sections';

export default async function BlogPage() {
  const posts = await sanityClient.fetch<BlogPost[]>(BLOG_POSTS_QUERY).catch(() => []);

  return (
    <main>
      <h1>Blog (Sanity CMS)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
