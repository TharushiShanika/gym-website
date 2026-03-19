export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">About Our Gym</h2>
          <p className="text-gray-600">
            We provide world-class equipment, professional trainers, and
            personalized fitness programs to help you reach your goals faster.
          </p>
        </div>
      </div>
    </section>
  );
}