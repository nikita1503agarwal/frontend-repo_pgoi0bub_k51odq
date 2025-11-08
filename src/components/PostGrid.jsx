import React from 'react';
import PostCard from './PostCard';

const demoPosts = [
  {
    id: 1,
    title: 'Launching our new platform: a behind-the-scenes look',
    excerpt: 'Go deeper with the team as we share the technical decisions and design principles that shaped our latest release.',
    category: 'Product',
    date: 'Nov 2, 2025',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    author: { name: 'Alex Rivera', avatar: 'https://i.pravatar.cc/100?img=5' },
  },
  {
    id: 2,
    title: 'How we foster a culture of continuous learning',
    excerpt: 'From weekly workshops to mentorship circles, here are the rituals that keep our team curious and growing.',
    category: 'Culture',
    date: 'Oct 20, 2025',
    readTime: 4,
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop',
    author: { name: 'Mina Patel', avatar: 'https://i.pravatar.cc/100?img=8' },
  },
  {
    id: 3,
    title: 'Design systems at scale: lessons learned',
    excerpt: 'Over two years, our design system became the backbone of our product. Here’s what worked and what we’d do differently.',
    category: 'Design',
    date: 'Oct 5, 2025',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1529336953121-ad7144b1ee8b?q=80&w=1200&auto=format&fit=crop',
    author: { name: 'Jordan Lee', avatar: 'https://i.pravatar.cc/100?img=12' },
  },
  {
    id: 4,
    title: 'Scaling backend services without the headaches',
    excerpt: 'Our approach to observability, resilience, and cost-efficiency while serving millions of requests daily.',
    category: 'Engineering',
    date: 'Sep 18, 2025',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1200&auto=format&fit=crop',
    author: { name: 'Sam Carter', avatar: 'https://i.pravatar.cc/100?img=16' },
  },
];

function PostGrid() {
  return (
    <section id="latest" className="relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Latest posts</h2>
          <a href="#" className="text-sm text-blue-700 hover:text-blue-900">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostGrid;
