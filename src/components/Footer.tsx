import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-background pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <span className="text-3xl font-display font-bold text-foreground tracking-widest uppercase">Meridian Prime</span>
            <p className="text-muted-foreground mt-8 max-w-sm leading-relaxed font-light">
              An oenology-driven steakhouse experience located in the heart of Southlake, Texas. 
              Focused on prime genetics and rare vintages.
            </p>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-8">Contact</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">1230 Metropolitan Way</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Southlake, TX 76092</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">(555) 829-9100</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">concierge@meridianprime.com</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-8">Service Hours</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex justify-between"><span>Mon - Thu</span> <span className="text-foreground">5pm - 10pm</span></li>
              <li className="flex justify-between"><span>Fri - Sat</span> <span className="text-foreground">5pm - 11pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-foreground">4pm - 9pm</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
            © 2024 Meridian Prime • Southlake • Oenology & Fire
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
