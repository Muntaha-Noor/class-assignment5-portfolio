import Image from "next/image";

export default function Hero() {
  return (
    <section className=" bg-gradient-to-r from-teal-500 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 p-8">
        <div className="flex-shrink-0 lg:w-1/3">
          <Image 
            src="/pic.jpg" 
            alt="Profile Picture" 
            height={250} 
            width={250} 
            className="rounded-full border-4 border-white shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="text-center lg:text-left lg:w-2/3 text-white">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            FRONTEND DEVELOPER
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6 animate-fadeIn">
            Hello, I&#39;m <span className="text-yellow-300">Muntaha Noor</span>
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed mb-8">
            I&#39;m a passionate and dedicated Frontend Web Developer with a love for crafting visually appealing, user-friendly, and responsive web experiences. I specialize in turning ideas into digital solutions through modern technologies like <span className="font-bold text-yellow-300">Next.js</span>, <span className="font-bold text-yellow-300">TypeScript</span>, and <span className="font-bold text-yellow-300">Tailwind CSS</span>. My goal is to combine creativity with code to deliver seamless and engaging user experiences.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 hover:border-white transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
