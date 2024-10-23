
export default function About() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-600 py-16 px-8 md:px-16 lg:px-32 text-white">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6 animate-fadeIn">
          I&#39;m a passionate frontend web developer with a strong focus on building
          responsive and modern websites. I enjoy working with modern technologies like{" "}
          <span className="font-semibold text-indigo-800">Next.js</span>,{" "}
          <span className="font-semibold text-indigo-800">React</span>, and{" "}
          <span className="font-semibold text-indigo-800">TypeScript</span> to create
          interactive and visually appealing web applications. I&#39;m dedicated to crafting
          user-friendly experiences and always looking to learn and improve my skills.
        </p>
        <a
          href="#contact"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}
