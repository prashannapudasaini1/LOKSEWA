import React from "react";

// Import images from assets
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

const features = [
  {
    title: "Easy Tournament Setup",
    description: "Quickly create and customize tournaments with minimal effort.",
    image: feature1,
  },
  {
    title: "Real-time Scoring & Updates",
    description: "Stay up-to-date with instant results and live score tracking.",
    image: feature2,
  },
  {
    title: "Team & Player Management",
    description: "Easily organize teams, players, and brackets all in one place.",
    image: feature3,
  },
  {
    title: "Interactive Dashboards",
    description: "Track progress and performance with powerful visual dashboards.",
    image: feature4,
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="min-h-[70vh] flex flex-col justify-center items-center bg-[#151515] px-8 py-16"
    >
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-72 h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50 group-hover:grayscale"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
