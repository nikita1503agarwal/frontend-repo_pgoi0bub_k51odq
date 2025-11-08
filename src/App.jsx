import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostGrid from './components/PostGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <PostGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
