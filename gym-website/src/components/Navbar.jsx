import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for a professional "floating" feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 px-8 py-4 flex justify-between items-center ${
        isScrolled 
          ? "bg-brand-dark/90 backdrop-blur-md py-3 shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      {/* Branding: Replace text with Logo if available */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center font-black text-black italic">
          FS
        </div>
        <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">
          Fitness <span className="text-brand-gold">Sports</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {["Home", "About", "Services", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}

        <button className="ml-4 border-2 border-brand-gold text-brand-gold px-6 py-2 rounded-sm text-sm font-black uppercase hover:bg-brand-gold hover:text-black transition-all duration-300">
          Join Now
        </button>
      </div>

      {/* Mobile Toggle (Simple placeholder for functionality) */}
      <div className="md:hidden text-brand-gold cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  );
}