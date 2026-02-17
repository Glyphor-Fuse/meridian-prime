import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  { url: '/images/interior-1.png', size: 'col-span-12 md:col-span-8', title: 'The Main Dining Room' },
  { url: '/images/interior-2.png', size: 'col-span-12 md:col-span-4', title: 'The Chef\'s Table' },
  { url: '/images/steak-filet.png', size: 'col-span-12 md:col-span-4', title: 'Signature Prep' },
  { url: '/images/wine-cellar-bg.png', size: 'col-span-12 md:col-span-8', title: 'The Rare Library' },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4 italic">Southlake Refined</h2>
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-[10px] font-bold">Metropolitan Chic Meets Urban Energy</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`${img.size} relative group overflow-hidden rounded-sm cursor-crosshair h-[300px] md:h-[450px] border border-border/10`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-foreground font-display text-2xl tracking-widest uppercase border-b border-primary pb-2">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
