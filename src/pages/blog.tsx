import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  const posts = [
    {
      title: '10 Tips for First-Time Luxury Home Buyers',
      excerpt: 'Navigate the luxury real estate market with confidence using these expert tips...',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
      author: 'John Smith',
      category: 'Buying Guide',
    },
    {
      title: 'The Rise of Smart Homes in Luxury Real Estate',
      excerpt: 'Discover how smart home technology is transforming luxury living...',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
      date: 'March 10, 2024',
      author: 'Sarah Johnson',
      category: 'Market Trends',
    },
    {
      title: 'Designing Your Dream Home: Latest Interior Trends',
      excerpt: 'Stay ahead of the curve with these luxury interior design trends...',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
      author: 'Michael Brown',
      category: 'Interior Design',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600">Stay updated with the latest in luxury real estate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{post.category}</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">2</button>
              <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">3</button>
            </nav>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blog;