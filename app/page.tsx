"use client";
import { motion } from "framer-motion";
import { TreePine, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION - exact match to mockup */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/hero-forest.jpg')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-none mb-6"
          >
            Measure Your Impact.<br />
            Shape a Greener Future.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          >
            Track carbon • Take action • Join 1.2 million changemakers
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-xl font-semibold bg-emerald-600 hover:bg-emerald-700 rounded-3xl shadow-xl shadow-emerald-500/30"
            >
              Calculate My Footprint Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-xl font-semibold border-2 border-white rounded-3xl hover:bg-white/10"
            >
              See How It Works
            </motion.button>
          </div>

          {/* Stat cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-left border border-white/20">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-emerald-300" />
                <div>
                  <p className="text-4xl font-bold">1.8B</p>
                  <p className="text-sm opacity-75">tons CO₂ saved globally</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-left border border-white/20">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-emerald-300" />
                <div>
                  <p className="text-4xl font-bold">87%</p>
                  <p className="text-sm opacity-75">users reduced impact</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-left border border-white/20">
              <div className="flex items-center gap-3">
                <TreePine className="w-8 h-8 text-emerald-300" />
                <div>
                  <p className="text-4xl font-bold">500K</p>
                  <p className="text-sm opacity-75">trees planted</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating leaf */}
        <div className="absolute bottom-10 right-10 text-emerald-200/30 text-7xl animate-bounce">🌿</div>
      </section>
    </main>
  );
}