import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-60"
      >
        <source src="/videos/hero-ambiance.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-primary font-medium tracking-[0.5em] uppercase text-sm mb-6">
            Premier Grill & Oenology
          </h2>
          <h1 className="text-5xl md:text-8xl font-display text-foreground leading-[1.1] mb-8">
            The Intersection of <br />
            <span className="italic">Fire & Vine</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the metropolitan pulse of Southlake through curated prime cuts 
            and a world-class 4,000-bottle cellar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground font-bold tracking-widest uppercase hover:scale-105 transition-transform rounded-sm">
              Explore the Menu
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-border/50 text-foreground font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-all rounded-sm">
              Private Dining
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
