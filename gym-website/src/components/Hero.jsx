export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* High-quality background with brand-aligned overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48" 
          className="w-full h-full object-cover opacity-40"
          alt="Gym Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-2xl">
          <span className="text-brand-gold font-bold tracking-widest uppercase mb-4 block">
            Established 2023
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6 italic uppercase">
            Push Your <br/>
            <span className="text-transparent border-t-2 border-b-2 border-brand-gold">Limits</span>
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-md border-l-4 border-brand-gold pl-4">
            Experience premium fitness at Fitness Sports Center. Professional coaching and elite equipment.
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-gold text-black px-10 py-4 rounded-sm font-black uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              Start Now
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-sm font-black uppercase hover:bg-white hover:text-black transition-all">
              Our Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}