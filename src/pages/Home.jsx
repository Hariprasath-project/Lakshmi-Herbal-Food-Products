import React, { useState, useEffect } from "react";
import {
  Leaf,
  Star,
  Heart,
  Award,
  ArrowRight,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";
import CardProducts from "../components/CardProducts";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate hero content
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const heroContent = [
    {
      title: "Pure Herbal Nutrition",
      subtitle: "Discover the power of nature's finest ingredients",
      highlight: "100% Natural",
    },
    {
      title: "Traditional Wellness",
      subtitle: "Ancient recipes for modern healthy living",
      highlight: "Authentic",
    },
    {
      title: "Premium Quality",
      subtitle: "Handcrafted herbal products for your family",
      highlight: "Trusted",
    },
  ];

  const products = [
    {
      name: "Herbal Soup Powders",
      description: "Nourishing soups packed with healing herbs",
      icon: "🍲",
      features: ["Immunity Boost", "Digestive Health", "Energy & Vitality"],
    },
    {
      name: "Herbal Tea Powders",
      description: "Aromatic blends for wellness and relaxation",
      icon: "🍵",
      features: ["Stress Relief", "Natural Detox", "Antioxidant Rich"],
    },
    {
      name: "Herbal Food Pre Mix",
      description: "Ready-to-cook healthy meal solutions",
      icon: "🌿",
      features: ["Quick Preparation", "Nutrient Dense", "Family Friendly"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative h-auto pb-3 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-800/90 via-green-700/80 to-emerald-800/90"></div>
          <img
            // src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            src="https://media.istockphoto.com/id/1349381997/photo/female-hands-with-bowl-of-pumpkin-soup.jpg?s=612x612&w=0&k=20&c=bX5Xq1LmySatCItpQEG_ntpl_VqH0R_F9HEKGjRyBnE="
            alt="Herbal ingredients"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 animate-float">
            <Leaf className="h-8 w-8 text-emerald-200 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delay">
            <Leaf className="h-6 w-6 text-green-200 opacity-40" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float-slow">
            <Leaf className="h-10 w-10 text-emerald-300 opacity-50" />
          </div>
          <div className="absolute bottom-20 right-10 animate-float">
            <Leaf className="h-7 w-7 text-green-300 opacity-60" />
          </div>
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-4 mt-4">
            <span className="inline-block bg-emerald-500/20 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full text-sm font-medium border border-emerald-400/30 animate-pulse">
              {heroContent[currentSlide].highlight}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block animate-slide-in-left">Lakshmi Herbal</span>
            <span className="block text-emerald-200 animate-slide-in-right">
              Food Products
            </span>
          </h1>

          <div className="h-20 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-emerald-100 font-light transition-all duration-500">
              {heroContent[currentSlide].title}
            </h2>
            <p className="text-lg sm:text-xl text-emerald-200 mt-2 transition-all duration-500">
              {heroContent[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Us
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-emerald-200 text-sm">Natural</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-emerald-200 text-sm">Herbs Used</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-emerald-200 text-sm">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">5⭐</div>
              <div className="text-emerald-200 text-sm">Rated</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <CardProducts
        products={products}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />

      {/* Contact CTA Section */}
      <section
        className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 px-4 sm:px-6 lg:px-8"
        id="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Contact us today and discover the perfect herbal products for your
            healthy lifestyle
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+91 8667816842"
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+91 8667816842</span>
            </a>
            <a
              href="mailto:harisivaguru28102002@gmail.com"
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">
                harisivaguru28102002@gmail.com
              </span>
            </a>
            <a
              href="https://instagram.com/lakshmi_herbal_food_products"
              className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-medium">@lakshmi_herbal_food_products</span>
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 0.5s;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Landing;
