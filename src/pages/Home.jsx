"use client";

import { ArrowRight, Play, Beaker, Zap, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/1.png")',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Additional overlay for hero section */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-500 rounded-full opacity-15 animate-bounce"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fadeInUp">
              <p className="text-orange-500 text-lg font-semibold mb-4 animate-fadeInUp animation-delay-200">
                Trusted Supplier Since 2018
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-400">
                Quality Science Equipment for Educational Excellence
              </h1>

              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-600">
                We provide high-quality chemicals, physics equipment, and sports
                goods to schools and colleges across India
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-800">
                <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div> */}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white bg-opacity-95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
                Our Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                Comprehensive solutions for educational institutions with
                quality products and professional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Beaker className="w-12 h-12" />,
                  title: "Chemical Supply",
                  description:
                    "High-quality laboratory chemicals for educational institutions with proper safety certifications.",
                  link: "/chemicals",
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Physics Equipment",
                  description:
                    "Precision instruments and apparatus for physics laboratories and demonstrations.",
                  link: "/physics-equipment",
                },
                {
                  icon: <Trophy className="w-12 h-12" />,
                  title: "Sports Equipment",
                  description:
                    "Complete range of sports goods for schools and colleges to promote physical education.",
                  link: "/sports",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 animate-fadeInUp p-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed h-20">
                    {service.description}
                  </p>

                  <button
                    onClick={() => navigate(service.link)}
                    className="w-full bg-black hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20  bg-opacity-90  overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
                Trusted by Leading Institutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
                We proudly serve top educational institutions across the country
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "200+", label: "Institutions Served" },
                { number: "8K+", label: "Products Delivered" },
                { number: "7+", label: "Years Experience" },
                { number: "99%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white bg-opacity-95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fadeInUp">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Contact us today to discuss your requirements and get a customized
              solution for your institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <button
                onClick={() => navigate("/contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us Now
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919817137130?text=Hello! I'm interested in your products.",
                    "_blank"
                  )
                }
                className="text-green-600 border px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                WhatsApp Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
