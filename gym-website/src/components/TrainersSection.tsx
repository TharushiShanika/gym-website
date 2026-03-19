import React from 'react';
import trainer1 from '../Assets/image1.jpg';
import trainer2 from '../Assets/image2.jpg';
import trainer3 from '../Assets/image3.jpg';
import trainer4 from '../Assets/image4.jpg';
import { motion } from 'framer-motion';
export function TrainersSection() {
  const trainers = [
  {
    name: 'Marcus Vance',
    specialty: 'Head Strength Coach',
    bio: 'Former powerlifting champion specializing in raw strength and biomechanics.',
    image:
    trainer1  },
  {
    name: 'Sarah Jenkins',
    specialty: 'HIIT & Conditioning',
    bio: 'High-energy coach who will push your cardiovascular limits to the absolute max.',
    image:
trainer2  },
  {
    name: 'David Chen',
    specialty: 'Mobility & Recovery',
    bio: 'Expert in functional movement, injury prevention, and athletic longevity.',
    image:
trainer3  },
  {
    name: 'Elena Rostova',
    specialty: 'Bodybuilding & Prep',
    bio: 'IFBB Pro helping clients achieve peak aesthetic conditioning and stage readiness.',
    image:
trainer4  }];

  return (
    <section id="trainers" className="py-20 md:py-32 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Meet The <span className="text-orange-500">Experts</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Our coaching staff consists of industry veterans who practice what
              they preach.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.5
            }}
            className="group relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800">
            
              <div className="aspect-[3/4] overflow-hidden">
                <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-3">
                  {trainer.specialty}
                </p>
                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}