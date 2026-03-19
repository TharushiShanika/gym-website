import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  const stats = [
  {
    value: '10+',
    label: 'Years Experience'
  },
  {
    value: '5000+',
    label: 'Active Members'
  },
  {
    value: '50+',
    label: 'Weekly Classes'
  },
  {
    value: '20+',
    label: 'Expert Trainers'
  }];

  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className="relative">
            
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Man training with battle ropes"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
              Built for <span className="text-orange-500">Results</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mb-8"></div>

            <div className="space-y-6 text-neutral-400 text-lg">
              <p>
                Forge Fitness isn't just another commercial gym. We are a
                dedicated training facility designed for those who are serious
                about their goals. Whether you're a powerlifter, a beginner, or
                someone looking to transform their lifestyle, we have the tools
                you need.
              </p>
              <p>
                Our facility features state-of-the-art equipment, dedicated
                lifting platforms, an expansive turf area, and a community that
                pushes you to be your absolute best. Leave your ego at the door
                and bring your work ethic.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) =>
              <motion.div
                key={index}
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
                  delay: index * 0.1 + 0.3,
                  duration: 0.5
                }}
                className="border-l-2 border-orange-600 pl-4">
                
                  <div className="text-3xl md:text-4xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-neutral-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}