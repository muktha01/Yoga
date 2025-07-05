import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Yogic Nexus Yoga</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">What is Yoga?</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Sanskrit word "yoga" comes from the word "yuj" which means, "to unite." Yoga is the union of the individual with the whole of existence, also commonly referred to as "self-realization."
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The Hatha Yoga School delivers classical Hatha Yoga in its full depth and dimension. It is Sadhguru's vision to offer this ancient science in all its purity and make it available to every individual.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Yogic Nexus Yoga offers the ancient science of Yoga in all its purity and makes it available to every individual. We will suggest a series of yogic practices and help you schedule sessions in a way which suits your lifestyle.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-lg">
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Classical Hatha Yoga is a complete path by itself. If you give yourself totally to this process, you can make yourself the way you want."
            </blockquote>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">Our Qualified Teachers</h4>
              <p className="text-gray-600">
                Our Teachers are uniquely qualified to offer authentic and powerful yogic practices, ensuring you receive the most genuine yoga experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;