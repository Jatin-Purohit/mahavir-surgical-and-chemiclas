"use client";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection
        title="Contact Mahavir Surgical and Chemicals"
        subtitle="Get in Touch"
        description="Ready to place an order or have questions? We're here to help you find the perfect solutions for your institution."
        primaryButton={{ text: "Call Now" }}
        secondaryButton={{ text: "WhatsApp" }}
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      {/* <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Get in touch with us for all your educational equipment needs
          </p>
        </div>
      </section> */}

      {/* <section className="py-20 bg-white"> */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us for all your educational equipment needs
          </p>
        </div> */}

      {/* </section> */}

      <ContactForm
        title="Send Us Your Inquiry"
        subtitle="Fill out the form below and we'll get back to you within 24 hours"
      />

      {/* Contact Details & Map */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold text-white mb-8">
                Visit Our Office
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Main Market Galore OPP. Punjab National Bank, Galore
                      <br />
                      Hamirpur,
                      <br />
                      Himachl Pradesh - 177026
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-300">+91 7650042130 (Sales)</p>
                    <p className="text-gray-300">+91 9817137130 (Support)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300">
                      sushilsharma121077@gmail.com
                    </p>
                    {/* <p className="text-gray-300">sales@sciencepro.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-300">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fadeInUp animation-delay-400">
              <div className="bg-white rounded-lg p-4 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.117975194773!2d76.45421117541053!3d31.630620074163737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5e3d57e0e05%3A0x9b2f7c8e67326e94!2sMahavir%20Surgical%20And%20Chemicals!5e0!3m2!1sen!2sin!4v1754142282503!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-6 animate-fadeInUp">
              Quick Contact Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our sales team
              </p>
              <button className="bg-black hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                +91 76500 42130
              </button>
            </div>

            <div className="text-center group animate-fadeInUp animation-delay-200">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Quick chat for instant responses
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/919817137130", "_blank")
                }
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Chat Now
              </button>
            </div>

            <div className="text-center group animate-fadeInUp animation-delay-400">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send detailed requirements</p>
              <button
                onClick={() =>
                  (window.location.href = "mailto:sushilsharma121077@gmail.com")
                }
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Send Email
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
