'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Link */}
          <Link
            href="/"
            className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            Rendani
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/projects"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/photography"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Photography
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
