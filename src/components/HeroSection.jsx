import { ArrowRight, MessageCircle, Play } from "lucide-react";

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButton,
  secondaryButton,
  backgroundImage,
  children,
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <img
            src={backgroundImage || "/placeholder.svg"}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white rounded-full opacity-10 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-500 rounded-full opacity-15 animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {subtitle && (
            <p className="text-orange-500 text-lg font-semibold mb-4 animate-fadeInUp animation-delay-200">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp animation-delay-400">
            {title}
          </h1>

          {description && (
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeInUp animation-delay-600">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-800">
            {primaryButton && (
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>{primaryButton.text}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            )}

            {secondaryButton && (
              <button className="group border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                {/* <Play className="w-5 h-5" /> */}
                <span>{secondaryButton.text}</span>
              </button>
            )}
          </div>

          {children && (
            <div className="mt-12 animate-fadeInUp animation-delay-1000">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
