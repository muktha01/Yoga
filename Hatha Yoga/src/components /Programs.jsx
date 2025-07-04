import React from 'react';
import { Star } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Upa Yoga",
      description: "A simple yet powerful system that activates the joints, muscles and energy system. Relieves stress and tiredness. Rejuvenates after inactivity.",
      benefits: ["Stress Relief", "Energy Activation", "Joint Health"]
    },
    {
      title: "Surya Kriya",
      description: "One should approach Surya Kriya with devotion and reverence - it is a powerful process. You can use it to transform yourself absolutely.",
      benefits: ["Spinal Health", "Mental Clarity", "Energy Balance"]
    },
    {
      title: "Angamardana",
      description: "A possibility to completely merge the body and the mind. Your body itself thinks, and more clearly than the mind.",
      benefits: ["Physical Strength", "Mental Focus", "Body-Mind Unity"]
    },
    {
      title: "Bhuta Shuddhi",
      description: "Cleanse the elements in your system to attain mastery over the elements. Gain control over body, mind, and aspects of creation.",
      benefits: ["Elemental Mastery", "Purification", "Higher Consciousness"]
    },
    {
      title: "Kids Yoga",
      description: "Open up possibilities for children to achieve better Physical and Mental Strength, Memory, Learning, and Extracurricular activities.",
      benefits: ["Enhanced Learning", "Physical Development", "Mental Strength"]
    }
  ];

  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of yogic practices designed to transform your life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="space-y-2">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center text-sm text-orange-600">
                      <Star className="w-4 h-4 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;