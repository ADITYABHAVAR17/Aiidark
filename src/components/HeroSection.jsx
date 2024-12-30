import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen hero-gradient-dark animated-bg overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-black rounded-full mix-blend-multiply opacity-25 animate-blob"></div>
        <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-gray-500/40 rounded-full floating"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-gray-500/40 rounded-full floating"
          style={{ animationDelay: "-1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-gray-500/40 rounded-full floating"
          style={{ animationDelay: "-2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center min-h-screen px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 scale-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Transform Your Business with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed scale-in">
            Empowering enterprises with cutting-edge AI solutions and expert
            consulting services for the digital age.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 scale-in">
            <a
              href="#services"
              className="px-8 py-4 bg-gray-700 text-gray-200 rounded-full font-semibold hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 border border-gray-600 rounded-full font-semibold hover:from-gray-700 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" rel="noopener noreferrer">
            <svg
              className="w-6 h-6 text-gray-300 opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
