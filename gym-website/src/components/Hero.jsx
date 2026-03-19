export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Your <span className="text-[#D4AF37]">Dream Body</span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Join the best fitness center and transform your life today
        </p>

        <button className="mt-6 bg-[#D4AF37] text-black px-8 py-3 rounded-lg hover:bg-yellow-400 transition font-semibold shadow-lg">
          Join Now
        </button>
      </div>
    </section>
  );
}