import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Eleanor Vance',
    role: 'Wine Enthusiast Magazine',
    quote: 'Meridian Prime isn\'t just a steakhouse; it\'s a masterclass in the synergy of fire and fruit. The 45-day dry-aged ribeye paired with their Napa library is transcendent.'
  },
  {
    name: 'James Harrison',
    role: 'Southlake Resident',
    quote: 'The metropolitan energy here is unmatched. It feels like Manhattan landed in the heart of Texas, but with the warm hospitality Southlake is known for.'
  },
  {
    name: 'Sarah Chen',
    role: 'Gastronomy Daily',
    quote: 'Chef Sterling has managed to make beef feel light and nuanced. Each cut tells a story of its origin, amplified by a wine cellar that is truly world-class.'
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-card border-y border-border/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col h-full text-center lg:text-left"
            >
              <Star className="text-primary w-12 h-12 mb-8 mx-auto lg:mx-0 opacity-20" />
              <p className="text-foreground text-xl font-display leading-relaxed italic mb-8 flex-grow">
                "{review.quote}"
              </p>
              <div className="border-t border-border/30 pt-6">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-foreground">{review.name}</p>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mt-2 font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
