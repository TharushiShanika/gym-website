import React from 'react';
import { motion } from 'framer-motion';
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Dark gym with heavy weights"
          className="w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6 text-shadow-md leading-none">
            Forge Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Strength
            </span>
          </h1>

          <motion.p
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 0.3,
              duration: 0.8
            }}
            className="text-lg md:text-2xl text-neutral-300 mb-10 font-medium max-w-2xl mx-auto">
            
            Elite equipment. Expert trainers. A community built on grit and
            determination. Stop making excuses and start making progress.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.5,
              duration: 0.8
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href="#plans"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg transition-all hover:scale-105 active:scale-95">
              
              Start Your Journey
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-neutral-950 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg transition-all">
              
              Explore the Gym
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}