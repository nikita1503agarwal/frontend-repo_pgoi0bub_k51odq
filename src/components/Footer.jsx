import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">B</div>
            <span className="text-base font-semibold text-gray-900">Company Blog</span>
          </div>
          <p className="text-gray-600">Stories and updates from the team building the future.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Docs</a></li>
            <li><a href="#" className="hover:text-gray-900">Guides</a></li>
            <li><a href="#" className="hover:text-gray-900">Support</a></li>
          </ul>
        </div>
        <div id="subscribe">
          <h4 className="font-semibold text-gray-900 mb-3">Subscribe</h4>
          <form className="flex gap-2">
            <input type="email" required placeholder="you@company.com" className="flex-1 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button type="submit" className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-black/90">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Your Company. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
