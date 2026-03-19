import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
export function MembershipSection() {
  const plans = [
  {
    name: 'Basic',
    price: '29',
    description: 'Perfect for casual lifters looking for a solid facility.',
    features: [
    'Full gym access during open hours',
    'Locker room access',
    'Free Wi-Fi',
    '1 Free personal training assessment'],

    highlighted: false
  },
  {
    name: 'Pro',
    price: '59',
    description: 'Our most popular plan for dedicated athletes.',
    features: [
    '24/7 Gym access',
    'Unlimited group classes',
    'Access to recovery zone (Sauna)',
    'Monthly body composition scan',
    'Guest pass (2/month)'],

    highlighted: true
  },
  {
    name: 'Elite',
    price: '99',
    description: 'The ultimate package for maximum results.',
    features: [
    'Everything in Pro plan',
    '2 Personal training sessions/month',
    'Custom nutrition programming',
    'Unlimited guest passes',
    'Priority class booking'],

    highlighted: false
  }];

  return (
    <section id="plans" className="py-20 md:py-32 bg-neutral-950">
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
              Choose Your <span className="text-orange-500">Path</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Straightforward pricing. No hidden fees. Cancel anytime.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.5
            }}
            className={`relative rounded-2xl p-8 ${plan.highlighted ? 'bg-neutral-900 border-2 border-orange-500 shadow-2xl shadow-orange-900/20 md:-translate-y-4' : 'bg-neutral-900/50 border border-neutral-800'}`}>
            
              {plan.highlighted &&
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
            }

              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-400 text-sm h-10">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline text-white">
                  <span className="text-5xl font-black tracking-tighter">
                    ${plan.price}
                  </span>
                  <span className="text-neutral-400 ml-2 font-medium">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, fIndex) =>
              <li key={fIndex} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-orange-500 mr-3 shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm">{feature}</span>
                  </li>
              )}
              </ul>

              <button
              className={`w-full py-4 rounded-lg font-black uppercase tracking-wider transition-colors ${plan.highlighted ? 'bg-orange-600 hover:bg-orange-500 text-white' : 'bg-neutral-800 hover:bg-neutral-700 text-white'}`}>
              
                Select Plan
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}