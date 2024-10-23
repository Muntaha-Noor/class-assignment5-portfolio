



import React from 'react';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-teal-500 to-blue-600 py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-10">Skills</h2>
        <div className="flex flex-col items-center space-y-4 md:flex-row md:flex-wrap md:justify-center md:space-y-0 md:space-x-6">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-teal-600 hover:text-white animate-bounce"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

