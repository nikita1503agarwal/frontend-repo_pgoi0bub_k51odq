import React from 'react';

function PostCard({ post }) {
  return (
    <article className="group rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <img src={post.image} alt={post.title} className="h-24 w-24 rounded-md object-cover" />
        <div className="flex-1">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 font-medium text-gray-700">{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">{post.title}</h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
          <div className="mt-4 flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-8 w-8 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.readTime} min read</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PostCard;
