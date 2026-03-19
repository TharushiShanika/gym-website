export default function Navbar() {
  return (
    <nav className="bg-[#0F172A] text-white px-8 py-4 flex justify-between items-center fixed w-full top-0 z-50 shadow">
      <h1 className="text-2xl font-bold text-green-400">GYM</h1>

      <div className="space-x-6 hidden md:flex items-center">
        <a href="#home" className="hover:text-green-400">Home</a>
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#services" className="hover:text-green-400">Services</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>

        <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
          Join Now
        </button>
      </div>
    </nav>
  );
}