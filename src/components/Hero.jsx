import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 mb-4">Insights from our team</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">Ideas, updates, and stories from our company</h1>
          <p className="text-lg text-gray-600 mb-8">Explore the latest announcements, deep-dives, and behind-the-scenes looks at how we build products and grow our culture.</p>
          <div className="flex items-center gap-3">
            <a href="#latest" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black/90 transition-colors">Read latest</a>
            <a href="#subscribe" className="inline-flex items-center rounded-md border border-gray-300 text-gray-900 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
