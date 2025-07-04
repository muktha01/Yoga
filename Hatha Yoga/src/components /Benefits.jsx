import React from 'react';
import { Heart, Users, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Physical Health",
      description: "Strengthens the spine, skeletal system and muscular system. Builds physical strength, fitness and tenacity."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Mental Clarity",
      description: "Develops mental clarity and focus. Stabilizes your body and brings stillness of mind."
    },
    {
      icon: <Star className="w-12 h-12 text-orange-500" />,
      title: "Weight Management",
      description: "Effective for fitness and weight reduction while maintaining overall health and vitality."
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-500" />,
      title: "Chronic Relief",
      description: "Relief of chronic health conditions and evolution of body and mind towards higher possibilities."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Practice</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;