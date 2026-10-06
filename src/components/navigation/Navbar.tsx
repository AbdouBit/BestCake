import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { BRAND_NAME, NAVIGATION_LINKS } from '../../config/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, openCart, lastAddedProductId } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-warm-sm py-3.5 border-b border-chocolate/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Minimaliste & Typographique */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none"
            aria-label="Accueil B'SAHA"
          >
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-chocolate transition-colors group-hover:text-accent">
                {BRAND_NAME}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent mb-1 transition-transform group-hover:scale-125" />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted/80 -mt-1 hidden sm:block">
              Maison Gourmande
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-chocolate/80 hover:text-accent transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions & Panier */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={openCart}
              className={`relative flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                lastAddedProductId
                  ? 'bg-accent text-white border-accent scale-105 shadow-warm-md'
                  : 'bg-surface hover:bg-surface-warm text-chocolate border-chocolate/10 shadow-warm-sm'
              }`}
              aria-label={`Panier contenant ${totalItems} articles`}
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:-rotate-12" />
              <span className="text-xs font-bold tracking-wider hidden sm:inline">Panier</span>
              
              <span
                className={`flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  lastAddedProductId
                    ? 'bg-white text-accent'
                    : totalItems > 0
                    ? 'bg-accent text-white'
                    : 'bg-chocolate/10 text-chocolate/70'
                }`}
              >
                {totalItems}
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors focus:outline-none"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-x-0 top-[60px] bg-[#FAF7F2] border-b border-chocolate/10 shadow-warm-lg md:hidden transition-all duration-300 ease-in-out px-6 py-6 flex flex-col gap-4 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {NAVIGATION_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-semibold text-chocolate hover:text-accent py-2 border-b border-chocolate/5 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="pt-2">
          <p className="text-xs text-muted">Maison artisanale de cookies, muffins & cakes faits maison.</p>
        </div>
      </div>
    </header>
  );
};
