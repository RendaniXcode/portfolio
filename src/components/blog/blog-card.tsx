'use client';

import Image from 'next/image';

interface BlogPost {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  image: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="md:flex">
        <div className="md:w-1/3">
          <Image
            src={post.image}
            alt={post.title}
            width={400} // You can adjust the width
            height={300} // You can adjust the height
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="p-8 md:w-2/3">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {post.category}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
          <h2 className="text-2xl font-medium text-gray-900 mb-4">{post.title}</h2>
          <p className="text-gray-600 mb-6">{post.excerpt}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              /* Add click handler later */
            }}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
