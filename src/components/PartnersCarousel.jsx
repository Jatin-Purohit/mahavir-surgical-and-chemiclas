const PartnersCarousel = () => {
  const partners = [
    { name: "Delhi University", logo: "/placeholder.svg?height=80&width=120" },
    { name: "IIT Delhi", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Jamia Millia", logo: "/placeholder.svg?height=80&width=120" },
    { name: "DPS Schools", logo: "/placeholder.svg?height=80&width=120" },
    {
      name: "Kendriya Vidyalaya",
      logo: "/placeholder.svg?height=80&width=120",
    },
    { name: "DAV Schools", logo: "/placeholder.svg?height=80&width=120" },
    {
      name: "Ryan International",
      logo: "/placeholder.svg?height=80&width=120",
    },
    { name: "Modern School", logo: "/placeholder.svg?height=80&width=120" },
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200">
            We proudly serve top educational institutions across the country
          </p>
        </div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-16 w-24 object-contain mx-auto"
                />
                <p className="text-center text-sm font-semibold text-gray-700 mt-2">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "500+", label: "Institutions Served" },
            { number: "10K+", label: "Products Delivered" },
            { number: "15+", label: "Years Experience" },
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
  );
};

export default PartnersCarousel;
