function App() {
  return (
    <main className="bg-brand-dark font-sans text-white">
      <Navbar />
      <Hero />
      <div className="bg-brand-light text-brand-dark">
        <About />
      </div>
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}