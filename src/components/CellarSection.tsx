import React from 'react';
import { motion } from 'framer-motion';

export const CellarSection = () => {
  return (
    <section id="cellar" className="py-24 px-8 bg-muted relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 grayscale pointer-events-none">
        <img 
          src="/images/wine-cellar-bg.png" 
          alt="Vintage Wine Cellar" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-muted" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">The Meridian Library</span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mt-4 mb-8 leading-tight">
            A Living Archive of Terroir
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 font-light">
            Our sommelier team maintains a collection of over 4,000 labels, focusing on vertical 
            vintages from the world's most prestigious estates. From the steep slopes of 
            the Mosel to the red soils of Coonawarra, every bottle is a narrative of its land.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-border/20 bg-background/50 backdrop-blur-sm rounded-sm">
              <h4 className="text-foreground font-display text-xl mb-2">Reserve Tasting</h4>
              <p className="text-muted-foreground text-sm">Guided exploration of five premier crus from our private vault.</p>
              <button className="mt-6 text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors">Book Experience</button>
            </div>
            <div className="p-8 border border-border/20 bg-background/50 backdrop-blur-sm rounded-sm">
              <h4 className="text-foreground font-display text-xl mb-2">Vintage Sourcing</h4>
              <p className="text-muted-foreground text-sm">Allow our sommeliers to track down specific birth-year bottles for your event.</p>
              <button className="mt-6 text-xs font-bold uppercase tracking-widest text-primary hover:text-foreground transition-colors">Inquire Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CellarSection;
