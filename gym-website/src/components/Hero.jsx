export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1558611848-73f7eb4001a1')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Transform Your Body Today
        </h1>
        <p className="mt-4 text-lg">
          Join the best fitness center in your city
        </p>

        <button className="mt-6 bg-green-500 px-6 py-3 rounded hover:bg-green-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
}