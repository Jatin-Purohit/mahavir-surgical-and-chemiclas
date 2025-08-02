"use client";

import { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import { physicsData } from "../data/physicsData";
import { Search, ShoppingCart, Eye, Zap, BookOpen } from "lucide-react";

const PhysicsEquipment = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const categories = [...new Set(physicsData.map((item) => item.category))];

  const filteredEquipment = useMemo(() => {
    const filtered = physicsData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;

      let matchesPrice = true;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        matchesPrice = item.price >= min && (max ? item.price <= max : true);
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "category":
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen pt-16 bg-black">
      <HeroSection
        title="Physics Laboratory Equipment"
        subtitle="Precision Instruments for Education"
        description="Complete range of physics lab equipment for schools and colleges - from basic mechanics to advanced electronics"
        primaryButton={{ text: "Browse Equipment" }}
        secondaryButton={{ text: "Lab Setup Guide" }}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      {/* Physics Equipment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Physics Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Precision instruments for physics education and research
          </p>
        </div>
      </section>

      {/* Animated Physics Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-16 h-16 border-4 border-orange-500 rounded-full opacity-20 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white opacity-10 animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 border-4 border-orange-500 opacity-15 animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-orange-500 rounded-full opacity-20 animate-float"></div>
      </div>

      {/* Filters and Search */}
      <section className="relative z-10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search physics equipment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">All Prices</option>
                  <option value="0-300">₹0 - ₹300</option>
                  <option value="300-600">₹300 - ₹600</option>
                  <option value="600-1000">₹600 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000">₹2000+</option>
                </select>
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className="text-gray-600">
                Showing {filteredEquipment.length} of {physicsData.length} items
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600">
                    Calibrated & Certified
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-600">
                    Educational Grade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="relative z-10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredEquipment.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Equipment Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Equipment Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {item.specifications
                        .slice(0, 3)
                        .map((spec, specIndex) => (
                          <li key={specIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                            {spec}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold text-orange-500">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <div className="text-white text-xl mb-4">
                No equipment found matching your criteria
              </div>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                  setPriceRange("");
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lab Setup Guide */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fadeInUp">
              Complete Lab Setup Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              We provide complete physics laboratory setup with equipment,
              installation, and training
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Equipment Package
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Complete equipment packages for different grade levels and
                curriculum requirements
              </p>
            </div>

            <div className="text-center group animate-fadeInUp animation-delay-200">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Training & Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive training for teachers and technical support for
                equipment maintenance
              </p>
            </div>

            <div className="text-center group animate-fadeInUp animation-delay-400">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tailored solutions based on your institution's specific needs
                and budget
              </p>
            </div>
          </div>

          <div className="text-center mt-12 animate-fadeInUp animation-delay-600">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 mr-4">
              Request Lab Setup Quote
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210?text=Hello! I need physics lab setup for my institution.",
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicsEquipment;
