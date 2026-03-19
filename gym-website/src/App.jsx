import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MembershipSection } from './components/MembershipSection';
import { TrainersSection } from './components/TrainersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MembershipSection />
        <TrainersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>);

}