import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Search, SlidersHorizontal } from 'lucide-react';

function Properties() {
  const [showFilters, setShowFilters] = useState(false);

  const properties = [
    // ... (previous 6 properties) ...,
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      title: 'Seaside Villa',
      price: '$3.5M',
      location: 'Newport Beach, CA',
      beds: 4,
      baths: 3,
      sqft: 3800,
    },
    {
      image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80',
      title: 'Downtown Loft',
      price: '$1.8M',
      location: 'Chicago, IL',
      beds: 2,
      baths: 2,
      sqft: 1800,
    },
    // Add more properties...
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Available Properties</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-gray-600 hover:text-blue-600"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Any Price</option>
                  <option>$500k - $1M</option>
                  <option>$1M - $2M</option>
                  <option>$2M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Any</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                  <option>4+</option>
                  <option>5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">2</button>
              <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">3</button>
              <span className="px-3 py-1">...</span>
              <button className="px-3 py-1 rounded-md text-gray-600 hover:bg-gray-100">10</button>
            </nav>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Properties;