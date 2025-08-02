"use client";

import { useState, useMemo } from "react";
import ChemicalBottle from "../components/ChemicalBottle";
import { chemicalsData } from "../data/chemicalsData";
import { Search, ShoppingCart, Eye } from "lucide-react";

const Chemicals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    ...new Set(chemicalsData.map((chemical) => chemical.category)),
  ];

  const filteredChemicals = useMemo(() => {
    const filtered = chemicalsData.filter((chemical) => {
      const matchesSearch =
        chemical.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chemical.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        !selectedCategory || chemical.category === selectedCategory;

      let matchesPrice = true;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        matchesPrice =
          chemical.price >= min && (max ? chemical.price <= max : true);
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort chemicals
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
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Laboratory Chemicals
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            High-quality chemicals for educational institutions
          </p>
        </div>
      </section>

      {/* Animated Chemical Elements Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-5 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-orange-500 rounded-full opacity-8 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-14 h-14 bg-white rounded-full opacity-6 animate-float-delayed"></div>
      </div>

      {/* Filters and Search */}
      <section className="relative z-10 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search chemicals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
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

              {/* Price Range */}
              <div>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">All Prices</option>
                  <option value="0-100">₹0 - ₹100</option>
                  <option value="100-200">₹100 - ₹200</option>
                  <option value="200-300">₹200 - ₹300</option>
                  <option value="300-500">₹300 - ₹500</option>
                  <option value="500">₹500+</option>
                </select>
              </div>

              {/* Sort */}
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
                Showing {filteredChemicals.length} of {chemicalsData.length}{" "}
                chemicals
              </p>
              <div className="text-sm text-gray-500">
                <span className="text-orange-500 font-semibold">Note:</span>{" "}
                Prices may change. Contact for current rates.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chemicals Grid */}
      <section className="relative z-10 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredChemicals.map((chemical, index) => (
              <div
                key={chemical.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Chemical Bottle Image */}
                <div className="p-4">
                  <ChemicalBottle name={chemical.name} />
                </div>

                {/* Chemical Info */}
                <div className="p-6 pt-0">
                  <div className="mb-3">
                    <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                      {chemical.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {chemical.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {chemical.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Quantity</p>
                      <p className="font-semibold text-black">
                        {chemical.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold text-orange-500">
                        ₹{chemical.price}
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

          {filteredChemicals.length === 0 && (
            <div className="text-center py-12">
              <div className="text-white text-xl mb-4">
                No chemicals found matching your criteria
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

      {/* Quality Chemicals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Quality Chemicals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-grade laboratory chemicals for all your educational needs
          </p>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 animate-fadeInUp">
            Need Bulk Quantities?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Get special pricing for bulk orders and institutional requirements.
            Contact our team for customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Request Bulk Quote
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919876543210?text=Hello! I need bulk chemicals for my institution.",
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chemicals;
