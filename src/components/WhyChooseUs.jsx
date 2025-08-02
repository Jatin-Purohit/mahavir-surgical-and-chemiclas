import {
  Shield,
  Clock,
  Award,
  Users,
  Truck,
  HeadphonesIcon,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description:
        "All products are tested and certified to meet educational standards with proper documentation.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Delivery",
      description:
        "Fast and reliable delivery across India with real-time tracking and secure packaging.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "15+ Years Experience",
      description:
        "Trusted by educational institutions for over 15 years with proven track record.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description:
        "Dedicated team of professionals with deep knowledge in educational equipment.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Bulk Orders",
      description:
        "Special pricing and customized solutions for bulk orders and institutional requirements.",
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for queries, orders, and technical assistance.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Why Choose SciencePro?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            We are committed to providing the best products and services to
            educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeInUp animation-delay-800">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Start Your Order Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
