const services = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching with experts",
  },
  {
    title: "Strength Training",
    desc: "Build muscle with modern equipment",
  },
  {
    title: "Cardio Programs",
    desc: "Burn fat with effective workouts",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-8 rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}