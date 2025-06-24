import React from "react";
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

const CardProducts = ({ products, isVisible, setIsVisible }) => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-600">Premium</span> Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Crafted with love and powered by nature's finest ingredients for
              your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-emerald-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-emerald-500 fill-current" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-4 group-hover:from-emerald-600 group-hover:to-green-600 transition-all duration-300">
                  <button className="w-full text-white font-semibold hover:scale-105 transition-transform duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardProducts;
