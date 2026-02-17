import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background/90 backdrop-blur-xl border-b border-border/10"
    >
      <div className="flex items-center gap-8">
        <a href="#menu" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">Menu</a>
        <a href="#cellar" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">Cellar</a>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-2xl font-display tracking-[0.2em] uppercase font-bold text-foreground">
          Meridian Prime
        </span>
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-1">
          Southlake • Texas
        </span>
      </div>

      <div className="flex items-center gap-8">
        <a href="#story" className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors">Story</a>
        <button className="px-6 py-2 bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase hover:bg-primary/90 transition-all rounded-sm">
          Reserve
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
