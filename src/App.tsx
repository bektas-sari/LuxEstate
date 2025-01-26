import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import { ArrowRight, Star } from 'lucide-react';

function App() {
  const featuredProperties = [
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      title: 'Modern Luxury Villa',
      price: '$2.5M',
      location: 'Beverly Hills, CA',
      beds: 5,
      baths: 4,
      sqft: 4500,
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      title: 'Waterfront Mansion',
      price: '$4.2M',
      location: 'Miami Beach, FL',
      beds: 6,
      baths: 5,
      sqft: 6200,
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      title: 'Contemporary Downtown Penthouse',
      price: '$3.1M',
      location: 'New York, NY',
      beds: 3,
      baths: 3,
      sqft: 2800,
    },
    {
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
      title: 'Beachfront Paradise',
      price: '$5.8M',
      location: 'Malibu, CA',
      beds: 4,
      baths: 5,
      sqft: 5200,
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      title: 'Mountain View Estate',
      price: '$3.9M',
      location: 'Aspen, CO',
      beds: 5,
      baths: 4,
      sqft: 4800,
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
      title: 'Urban Oasis Loft',
      price: '$2.8M',
      location: 'San Francisco, CA',
      beds: 2,
      baths: 2,
      sqft: 2200,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Home"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Your Dream Home
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              Discover luxury properties in prime locations. Your perfect home is just a search away.
            </p>
          </div>
        </div>

        <SearchBar />
      </div>

      {/* Featured Properties Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
          <a href="/properties.html" className="text-blue-600 hover:text-blue-700 flex items-center">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600">Experience the difference with our premium services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Properties',
                description: 'Access to exclusive luxury properties in prime locations',
              },
              {
                icon: Star,
                title: 'Expert Guidance',
                description: 'Professional real estate agents with years of experience',
              },
              {
                icon: Star,
                title: 'Personalized Service',
                description: 'Tailored solutions to meet your specific requirements',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center transform transition-all duration-500 hover:rotate-12">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;