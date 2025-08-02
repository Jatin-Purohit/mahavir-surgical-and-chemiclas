"use client";
import ServicesSection from "../components/ServicesSection";
import {
  Truck,
  Shield,
  Wrench,
  Users,
  Award,
  Clock,
  Phone,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const serviceDetails = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Fast Delivery & Logistics",
      description:
        "Nationwide delivery with real-time tracking and secure packaging",
      features: [
        "Same-day delivery in Delhi NCR",
        "2-3 days delivery across India",
        "Real-time order tracking",
        "Secure packaging for fragile items",
        "Bulk order logistics management",
      ],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and certification for all products",
      features: [
        "ISO certified products",
        "Quality testing certificates",
        "Compliance with educational standards",
        "Product authenticity guarantee",
        "Regular quality audits",
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Installation & Setup",
      description: "Professional installation and setup services for equipment",
      features: [
        "Expert technician visits",
        "Complete lab setup services",
        "Equipment calibration",
        "Safety compliance checks",
        "Post-installation support",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Training & Support",
      description: "Comprehensive training programs for teachers and staff",
      features: [
        "Equipment operation training",
        "Safety protocol education",
        "Maintenance guidelines",
        "Troubleshooting support",
        "Regular refresher sessions",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Consultation Services",
      description: "Expert consultation for laboratory and facility planning",
      features: [
        "Custom lab design",
        "Budget planning assistance",
        "Equipment recommendations",
        "Space optimization",
        "Compliance guidance",
      ],
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "24/7 Customer Support",
      description: "Round-the-clock support for all your queries and concerns",
      features: [
        "24/7 helpline support",
        "WhatsApp quick response",
        "Email support system",
        "On-site technical support",
        "Emergency replacement service",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We understand your requirements and provide expert recommendations",
    },
    {
      step: "02",
      title: "Quotation",
      description:
        "Detailed quotation with competitive pricing and delivery timeline",
    },
    {
      step: "03",
      title: "Order Processing",
      description: "Order confirmation and preparation with quality checks",
    },
    {
      step: "04",
      title: "Delivery & Installation",
      description: "Safe delivery and professional installation with training",
    },
    {
      step: "05",
      title: "After-Sales Support",
      description: "Ongoing support, maintenance, and warranty services",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Comprehensive solutions for all your educational equipment needs
          </p>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your educational equipment needs
          </p>
        </div>
      </section> */}

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Everything you need for a successful educational setup
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-orange-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-700"
                        >
                          <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              A streamlined process to ensure the best experience for our
              clients
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-orange-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center animate-fadeInUp"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Step Circle */}
                  <div className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Guarantees */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              Our Service Guarantees
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              We stand behind our services with these commitments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Guarantee",
                description:
                  "100% quality assurance on all products and services",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Timely Delivery",
                description: "On-time delivery guarantee or compensation",
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "24/7 Support",
                description: "Round-the-clock customer support availability",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Satisfaction Promise",
                description: "100% customer satisfaction or money back",
              },
            ].map((guarantee, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{guarantee.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6 animate-fadeInUp">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Contact us today to discuss your requirements and get a customized
            solution for your institution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button> */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/919817137130?text=Hello! I need information about your services.",
                  "_blank"
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Now
            </button>
            {/* <button className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
