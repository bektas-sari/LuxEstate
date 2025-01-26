import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Clock, Building } from 'lucide-react';

function About() {
  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Clock },
    { label: 'Properties Sold', value: '1000+', icon: Building },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Industry Awards', value: '25+', icon: Award },
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Johnson',
      role: 'Senior Real Estate Agent',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Michael Brown',
      role: 'Property Consultant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-16">
        {/* Hero Section */}
        <div className="relative bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">About LuxEstate</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're more than just a real estate agency. We're your partner in finding the perfect home.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2008, LuxEstate has grown from a small local agency to one of the most trusted names in luxury real estate. Our journey has been defined by our unwavering commitment to excellence and our passion for helping people find their dream homes.
                </p>
                <p className="text-gray-600">
                  We believe that finding the perfect property is about more than just square footage and amenities. It's about finding a place where memories will be made and lives will be lived. This belief drives everything we do.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Our Office"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
              <p className="mt-4 text-xl text-gray-600">The experts that make it all possible</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;