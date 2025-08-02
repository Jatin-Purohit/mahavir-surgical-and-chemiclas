import { Beaker, Zap, Trophy, Wrench, Users, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Beaker className="w-12 h-12" />,
      title: "Chemical Supply",
      description:
        "High-quality laboratory chemicals for educational institutions with proper safety certifications.",
      features: [
        "Pure Grade Chemicals",
        "Safety Data Sheets",
        "Bulk Orders",
        "Custom Packaging",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Physics Equipment",
      description:
        "Precision instruments and apparatus for physics laboratories and demonstrations.",
      features: [
        "Calibrated Instruments",
        "Educational Kits",
        "Maintenance Support",
        "Training Included",
      ],
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Sports Equipment",
      description:
        "Complete range of sports goods for schools and colleges to promote physical education.",
      features: [
        "Quality Certified",
        "Bulk Discounts",
        "Team Packages",
        "Seasonal Offers",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Installation & Setup",
      description:
        "Professional installation and setup services for laboratory equipment and sports facilities.",
      features: [
        "Expert Installation",
        "Safety Compliance",
        "Training Sessions",
        "Warranty Support",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Consultation",
      description:
        "Expert consultation for laboratory design and sports facility planning.",
      features: [
        "Custom Solutions",
        "Budget Planning",
        "Compliance Guidance",
        "Ongoing Support",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and certification processes for all our products.",
      features: [
        "ISO Certified",
        "Quality Testing",
        "Compliance Reports",
        "Customer Satisfaction",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Comprehensive solutions for educational institutions with quality
            products and professional services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <button className="mt-6 w-full bg-black hover:bg-orange-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
