export default function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-brand-gold rounded-xl opacity-20 group-hover:opacity-40 transition"></div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
            className="relative rounded-xl shadow-2xl z-10"
            alt="Gym Interior"
          />
        </div>

        <div>
          <h2 className="text-brand-gold font-bold uppercase tracking-widest mb-2">Since 2023</h2>
          <h3 className="text-5xl font-black mb-6 uppercase italic">About Our Gym</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide world-class equipment, professional trainers, and
            personalized fitness programs to help you reach your goals faster. [cite: 4]
          </p>
          <button className="mt-8 border-b-2 border-brand-gold font-bold uppercase hover:text-brand-gold transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}