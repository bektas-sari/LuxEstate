import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto -mt-8 relative z-10">
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="City, State"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option>Any Price</option>
            <option>$100k - $200k</option>
            <option>$200k - $500k</option>
            <option>$500k - $1M</option>
            <option>$1M+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
            <option>Any Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
            <option>Villa</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition duration-300"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}