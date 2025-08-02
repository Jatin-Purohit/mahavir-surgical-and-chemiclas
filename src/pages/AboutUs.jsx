import { Award, Building, Target } from "lucide-react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rajni Sharma",
      position: "Proprietor & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Rajni founded Mahavir Surgical and Chemicals with a vision to provide quality equipment to educational institutions.",
    },
    {
      name: "Sushil Kumar",
      position: "Accounts Manager",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Sushil manages all financial operations and ensures smooth transactions with our institutional clients across the country.",
    },
    {
      name: "Jatin Sharma",
      position: "Tender & Procurement Manager",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Jatin specializes in government tenders and bulk procurement, helping institutions get the best deals on quality equipment.",
    },
  ];

  const expertise = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "7+ Years Experience",
      description:
        "Serving educational institutions with dedication and expertise since 2018",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "200+ Institutions",
      description:
        "Trusted by schools, colleges, and universities across India",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Quality Focus",
      description:
        "Committed to providing only the highest quality products and services",
    },
  ];

  const institutions = [
    { name: "NIT Hamirpur", logo: "/images/nit.png?height=100&width=150" },
    {
      name: "Himachal Pradesh University",
      logo: "/images/hpu.png?height=100&width=150",
    },
    {
      name: "Kendriya Vidyalaya Hamirpur",
      logo: "/images/kv.jpg?height=100&width=150",
    },
    { name: "IIT Ropar", logo: "/images/iitr.svg?height=100&width=150" },
    {
      name: "Navodya Schools",
      logo: "/images/navo.png?height=100&width=150",
    },
    {
      name: "Government Schools",
      logo: "/placeholder.svg?height=100&width=150",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
            About SciencePro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            Your trusted partner for educational equipment and supplies since
            2018
          </p>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2018, SciencePro has been serving educational
            institutions with quality equipment and supplies.
          </p>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              The dedicated professionals behind SciencePro's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 animate-fadeInUp">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Years of experience and dedication to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-orange-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions We Serve */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
              Institutions We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
              Proud to be associated with leading educational institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={institution.logo || "/placeholder.svg"}
                  alt={institution.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
