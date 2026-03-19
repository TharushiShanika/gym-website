import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Join  <span className="text-orange-500">With Us</span>
            </h2>
            <div className="w-20 h-1.5 bg-orange-600 mb-8"></div>
            <p className="text-neutral-400 mb-10 text-lg">
              Ready to start your transformation? Drop in for a tour, give us a
              call, or send a message. We're ready when you are.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <MapPinIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">
                    Location
                  </h4>
                  <p className="text-neutral-400">
                    123/Willaim Street
                    <br />
                   Colombo
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <PhoneIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">
                    Phone
                  </h4>
                  <p className="text-neutral-400">(112) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <MailIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">
                    Email
                  </h4>
                  <p className="text-neutral-400">info@fitnesscentre.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0 mr-4">
                  <ClockIcon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wider mb-1">
                    Hours
                  </h4>
                  <p className="text-neutral-400">
                    Mon-Fri: 5:00 AM - 11:00 PM
                    <br />
                    Sat-Sun: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="bg-neutral-900 p-8 md:p-10 rounded-2xl border border-neutral-800">
            
            <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-6">
              Send a Message
            </h3>

            {isSuccess ?
            <div className="bg-green-900/30 border border-green-500/50 text-green-400 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>
                  Thanks for reaching out. A coach will get back to you within
                  24 hours.
                </p>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                  htmlFor="name"
                  className="block text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  
                    Full Name
                  </label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-neutral-950 border ${errors.name ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                  placeholder="John Doe" />
                
                  {errors.name &&
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                }
                </div>

                <div>
                  <label
                  htmlFor="email"
                  className="block text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  
                    Email Address
                  </label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-neutral-950 border ${errors.email ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors`}
                  placeholder="john@example.com" />
                
                  {errors.email &&
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                }
                </div>

                <div>
                  <label
                  htmlFor="message"
                  className="block text-sm font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  
                    Message
                  </label>
                  <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full bg-neutral-950 border ${errors.message ? 'border-red-500' : 'border-neutral-800'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none`}
                  placeholder="How can we help you?">
                </textarea>
                  {errors.message &&
                <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                }
                </div>

                <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center">
                
                  {isSubmitting ?
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> :

                'Send Message'
                }
                </button>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}