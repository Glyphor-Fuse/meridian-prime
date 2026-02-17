import React from 'react';
import { motion } from 'framer-motion';

export const ChefStory = () => {
  return (
    <section id="story" className="py-24 px-8 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 border border-border/20 shadow-2xl">
            <img 
              src="/images/chef-portrait.png" 
              alt="Executive Chef Marcus Sterling" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-primary/40 -z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-primary/40 -z-0" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Culinary Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-4 leading-tight">
              Crafted by Fire, <br />
              Defined by Soil.
            </h2>
          </div>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light">
            <p>
              Executive Chef Marcus Sterling brings two decades of precision to the Southlake metropolitan scene. 
              His approach is deceptively simple: procure the rarest genetic lines of Wagyu and Prime Angus, 
              and respect them with artisan wood-fire techniques.
            </p>
            <p>
              "The grill is our stage," says Sterling. "But the story begins in the vineyard. We don't just pair wine 
              with steak; we find the shared resonance between the tannin of the grape and the marbling of the cut."
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 py-8 border-t border-border/50">
            <div>
              <p className="text-foreground font-display text-3xl">45+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Days Dry-Aged</p>
            </div>
            <div>
              <p className="text-foreground font-display text-3xl">MBS 9+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Wagyu Score</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChefStory;
