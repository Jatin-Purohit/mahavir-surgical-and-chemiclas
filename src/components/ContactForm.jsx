"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const ContactForm = ({
  title = "Get In Touch",
  subtitle = "Ready to place an order or have questions?",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // WhatsApp integration
    const whatsappMessage = `Hello! I'm interested in your products.
Name: ${formData.name}
Institution: ${formData.institution}
Category: ${formData.category}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919817137130?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fadeInUp animation-delay-400">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="School/College name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a category</option>
                  <option value="chemicals">Chemicals</option>
                  <option value="physics">Physics Equipment</option>
                  <option value="sports">Sports Equipment</option>
                  <option value="electronics">Electronics</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/919876543210?text=Hello! I'm interested in your products.`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fadeInUp animation-delay-600">
            <div className="bg-black rounded-2xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+91 7650042130</p>
                    <p className="text-gray-300">+91 9817137130</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">
                      sushilsharma121077@gmail.com
                    </p>
                    {/* <p className="text-gray-300">sales@sciencepro.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">
                      Main Market Galore OPP. Punjab National Bank, Galore
                      <br />
                      Hamirpur,
                      <br />
                      Himachl Pradesh - 177026
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
