export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-white px-8 py-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-lg">
      
      <h1 className="text-2xl font-bold text-[#D4AF37]">
        FITNESS
      </h1>

      <div className="space-x-6 hidden md:flex items-center">
        <a href="#home" className="hover:text-[#D4AF37] transition">Home</a>
        <a href="#about" className="hover:text-[#D4AF37] transition">About</a>
        <a href="#services" className="hover:text-[#D4AF37] transition">Services</a>
        <a href="#contact" className="hover:text-[#D4AF37] transition">Contact</a>

        <button className="bg-[#D4AF37] text-black px-5 py-2 rounded-lg hover:bg-yellow-400 transition font-semibold">
          Join Now
        </button>
      </div>
    </nav>
  );
}