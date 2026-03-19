const services = [
  { title: "Elite Coaching", desc: "Expert guidance from certified professionals.", icon: "⚡" },
  { title: "Power Lifting", desc: "Specialized zones for heavy-duty training.", icon: "🏋️" },
  { title: "Cardio Zone", desc: "High-end machines for endurance and health.", icon: "🏃" },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-brand-gold font-bold uppercase tracking-tighter mb-2">Our Services</h2>
            <h3 className="text-5xl font-black text-brand-dark uppercase">What We Offer</h3>
          </div>
          <p className="text-gray-500 max-w-sm mt-4 md:mt-0">
            Tailored fitness solutions designed to get you results faster and safer[cite: 4].
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
          {services.map((s, i) => (
            <div key={i} className="p-12 border-r border-b md:border-b-0 last:border-r-0 hover:bg-brand-dark group transition-all duration-500">
              <span className="text-4xl mb-6 block group-hover:scale-110 transition-transform">{s.icon}</span>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-gold transition-colors">{s.title}</h4>
              <p className="text-gray-600 group-hover:text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}