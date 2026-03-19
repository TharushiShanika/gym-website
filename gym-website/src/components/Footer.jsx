import React from 'react';
import {
  DumbbellIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <DumbbellIcon className="w-8 h-8 text-orange-500" />
              <span className="font-black text-2xl tracking-tighter uppercase text-white">
                Forge<span className="text-orange-500">Fitness</span>
              </span>
            </a>
            <p className="text-neutral-400 max-w-sm mb-6">
              A premium training facility dedicated to building strength,
              character, and community. No excuses, just results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:bg-neutral-800 transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:bg-neutral-800 transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:bg-neutral-800 transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Memberships
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Trainers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Gym Rules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-orange-500 transition-colors">
                  
                  Waiver
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Forge Fitness. All rights
            reserved.
          </p>
          <p className="text-neutral-500 text-sm">Designed for strength.</p>
        </div>
      </div>
    </footer>);

}