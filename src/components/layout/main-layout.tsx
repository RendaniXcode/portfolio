'use client';

export default function MainLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a 
              href="/" 
              className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors"
            >
              Rendani Tshivhangani
            </a>

            <nav className="flex items-center space-x-4">
              <a 
                href="/projects" 
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                Experience
              </a>
              <a 
                href="/blog" 
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                Blog
              </a>
              <a 
                href="/contact" 
                className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}