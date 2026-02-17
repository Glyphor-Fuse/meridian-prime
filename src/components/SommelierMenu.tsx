import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const STEAKS = [
  {
    id: 'ribeye',
    name: 'Prime Bone-In Ribeye',
    origin: 'Black Angus, Creekstone Farms',
    notes: 'Exceptional marbling, dry-aged 45 days. Rich, buttery profile.',
    image: '/images/steak-ribeye.png',
    pairing: {
      wine: 'Silver Oak Cabernet Sauvignon',
      vintage: '2018',
      region: 'Alexander Valley, CA',
      tasting: 'A classic pairing. The structured tannins and dark fruit cut through the intense fat content of the ribeye.',
      colorClass: 'bg-accent'
    }
  },
  {
    id: 'wagyu',
    name: 'A5 Miyazakigyu Strip',
    origin: 'Kyushu Island, Japan',
    notes: 'The pinnacle of beef. Delicate texture with intense umami.',
    image: '/images/steak-wagyu.png',
    pairing: {
      wine: 'Domaine de la Côte Pinot Noir',
      vintage: '2021',
      region: 'Sta. Rita Hills, CA',
      tasting: 'The high acidity and bright red fruit of this Pinot Noir provides a refreshing counterpoint to the richness of A5 Wagyu.',
      colorClass: 'bg-primary'
    }
  },
  {
    id: 'filet',
    name: 'Center-Cut Filet Mignon',
    origin: 'Grass-Fed, Southern Plains',
    notes: 'Lean, tender, and refined. Finished with herb-infused marrow butter.',
    image: '/images/steak-filet.png',
    pairing: {
      wine: 'Château Montelena Chardonnay',
      vintage: '2019',
      region: 'Napa Valley, CA',
      tasting: 'Surprising but sublime. The oak-influenced body of the Chardonnay matches the softness of the filet perfectly.',
      colorClass: 'bg-secondary'
    }
  }
];

export const SommelierMenu = () => {
  const [selected, setSelected] = useState(STEAKS[0]);

  return (
    <section id="menu" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs">The Signature Experience</span>
          <h2 className="text-4xl md:text-6xl font-display text-foreground mt-4 italic">Sommelier's Choice</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Select a signature cut to reveal our sommelier's curated wine pairing.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            {STEAKS.map((steak) => (
              <motion.button
                key={steak.id}
                onClick={() => setSelected(steak)}
                className={`w-full text-left p-6 rounded-sm border transition-all duration-300 ${
                  selected.id === steak.id 
                    ? 'bg-muted border-primary/50 shadow-2xl shadow-primary/5' 
                    : 'bg-card/40 border-border/20 hover:border-border/60'
                }`}
                whileHover={{ x: 10 }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">{steak.origin}</p>
                <h3 className="text-xl font-display text-foreground">{steak.name}</h3>
                {selected.id === steak.id && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-muted-foreground text-sm mt-3 leading-relaxed"
                  >
                    {steak.notes}
                  </motion.p>
                )}
              </motion.button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-video lg:aspect-square bg-card rounded-sm overflow-hidden p-12 flex items-center justify-center border border-border/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="flex-1 relative h-full w-full">
                    <img 
                      src={selected.image} 
                      alt={selected.name}
                      className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div 
                        className={`w-12 h-12 rounded-full border border-border/50 flex items-center justify-center shadow-lg ${selected.pairing.colorClass}`}
                      >
                        <div className="w-4 h-4 rounded-full bg-background/20 animate-pulse" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase">Perfect Pairing</p>
                        <p className="text-muted-foreground text-xs italic">{selected.pairing.region}</p>
                      </div>
                    </div>
                    
                    <h4 className="text-2xl font-display text-foreground leading-tight">
                      {selected.pairing.wine} <br />
                      <span className="text-primary/70">{selected.pairing.vintage}</span>
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed italic text-sm md:text-base border-l-2 border-primary/20 pl-4">
                      "{selected.pairing.tasting}"
                    </p>
                    
                    <button className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors group">
                      View Cellar Notes <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SommelierMenu;
