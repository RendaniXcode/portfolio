// File: src/app/blog/page.tsx
// Blog Page Component
// Path: ./src/app/blog/page.tsx

import BlogCard from '@/components/blog/blog-card';

export default function BlogPage() {
  const posts = [
    {
      title: "Cloud Architecture Best Practices",
      date: "2024-03-20",
      category: "Cloud Computing",
      excerpt: "Exploring the fundamental principles of cloud architecture and how to implement them effectively in enterprise environments. Learn about AWS Well-Architected Framework, scalability patterns, and cost optimization strategies.",
      readTime: "5 min read",
      image: "/api/placeholder/800/400",
      tags: ["AWS", "Cloud", "Architecture", "Best Practices"]
    },
    {
      title: "DevOps Journey: From Theory to Practice",
      date: "2024-03-15",
      category: "DevOps",
      excerpt: "Real-world experiences and lessons learned while implementing DevOps practices in large organizations. Discover how to overcome common challenges and build a successful DevOps culture.",
      readTime: "8 min read",
      image: "/api/placeholder/800/400",
      tags: ["DevOps", "CI/CD", "Automation", "Culture"]
    },
    {
      title: "The Future of Enterprise Architecture",
      date: "2024-03-10",
      category: "Enterprise",
      excerpt: "Analyzing emerging trends and technologies shaping the future of enterprise architecture. From microservices to event-driven architectures, explore what's next in enterprise solutions.",
      readTime: "6 min read",
      image: "/api/placeholder/800/400",
      tags: ["Enterprise", "Architecture", "Innovation"]
    },
    {
      title: "Mastering AWS Solutions Architecture",
      date: "2024-03-05",
      category: "Cloud Computing",
      excerpt: "Deep dive into AWS solutions architecture, including real-world case studies and advanced design patterns. Learn how to build resilient and scalable cloud solutions.",
      readTime: "10 min read",
      image: "/api/placeholder/800/400",
      tags: ["AWS", "Cloud", "Solutions Architecture"]
    },
    {
      title: "Red Hat OpenShift and Enterprise Kubernetes",
      date: "2024-03-01",
      category: "Container Orchestration",
      excerpt: "Comprehensive guide to Red Hat OpenShift and enterprise Kubernetes deployments. From basics to advanced operational scenarios.",
      readTime: "12 min read",
      image: "/api/placeholder/800/400",
      tags: ["OpenShift", "Kubernetes", "Containers"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-medium text-gray-900 mb-4">
              Blog & Articles
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Technical insights, architectural deep-dives, and lessons learned from
              building enterprise solutions and cloud architectures.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter - You can make this interactive later */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
            All Posts
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer">
            Cloud Computing
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer">
            DevOps
          </span>
          <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 cursor-pointer">
            Enterprise
          </span>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 gap-12">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* Pagination - You can make this interactive later */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              Previous
            </button>
            <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">
              1
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              3
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}