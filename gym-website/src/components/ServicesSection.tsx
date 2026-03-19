import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  DumbbellIcon,
  HeartPulseIcon,
  UsersIcon,
  ActivityIcon,
  AppleIcon,
  SparklesIcon } from
'lucide-react';
export function ServicesSection() {
  const services = [
  {
    title: 'Strength Training',
    description:
    'Free weights, power racks, and specialized machines to build raw power and muscle mass.',
    icon: DumbbellIcon
  },
  {
    title: 'Cardio Zone',
    description:
    'High-end treadmills, rowers, and assault bikes to push your cardiovascular endurance.',
    icon: HeartPulseIcon
  },
  {
    title: 'Group Classes',
    description:
    'High-energy group sessions including HIIT, spin, and functional fitness led by pros.',
    icon: UsersIcon
  },
  {
    title: 'Personal Training',
    description:
    '1-on-1 coaching tailored to your specific goals, biomechanics, and lifestyle.',
    icon: ActivityIcon
  },
  {
    title: 'Nutrition Coaching',
    description:
    'Custom meal plans and macro tracking guidance to fuel your performance and recovery.',
    icon: AppleIcon
  },
  {
    title: 'Recovery & Spa',
    description:
    'Saunas, cold plunges, and massage therapy to help you bounce back faster.',
    icon: SparklesIcon
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-900">
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
              Our <span className="text-orange-500">Arsenal</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Everything you need to dominate your goals. No gimmicks, just
              premium equipment and expert guidance.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-neutral-950 border border-neutral-800 p-8 rounded-xl hover:border-orange-500/50 transition-colors group">
                
                <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600/10 transition-colors">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-wide text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>);

          })}
        </motion.div>
      </div>
    </section>);

}