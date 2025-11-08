import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">B</div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">Company Blog</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#latest" className="hover:text-gray-900 transition-colors">Latest</a>
          <a href="#stories" className="hover:text-gray-900 transition-colors">Stories</a>
          <a href="#culture" className="hover:text-gray-900 transition-colors">Culture</a>
          <a href="#news" className="hover:text-gray-900 transition-colors">News</a>
        </nav>

        <a href="#subscribe" className="ml-4 inline-flex items-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black/90 transition-colors">Subscribe</a>
      </div>
    </header>
  );
}

export default Header;
