import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            className="rounded-full border-2 border-white"
            src="/profile-image.jpeg"
            alt="profile pic"
            height={50}
            width={50}
          />
          <h1 className="text-lg font-bold pl-3">My Portfolio</h1>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="relative group">
            <span className="transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400">
              Home
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/about" className="relative group">
            <span className="transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400">
              About
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/skills" className="relative group">
            <span className="transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400">
              Skills
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="transition-all duration-300 transform group-hover:scale-110 group-hover:text-yellow-400">
              Contact
            </span>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
