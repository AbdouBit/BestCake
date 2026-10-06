import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCategory, Product } from '../types/product';
import { ProductCard } from '../components/products/ProductCard';

interface FeaturedSectionProps {
  onOpenDetails: (product: Product) => void;
  initialCategory?: ProductCategory | 'all';
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onOpenDetails, initialCategory = 'all' }) => {
  const [selectedFilter, setSelectedFilter] = useState<ProductCategory | 'all'>(initialCategory);

  const filteredProducts = selectedFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedFilter);

  return (
    <section id="catalogue" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Titre & Filtres */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nos Créations Maison</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
              Faits maison. Pensés pour être partagés.
            </h2>
          </div>

          {/* Onglets Filtres */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-cream/50 border border-chocolate/10 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-chocolate text-white shadow-warm-sm'
                  : 'text-chocolate/70 hover:text-chocolate'
              }`}
            >
              Tous les délices ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('cookies')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'cookies'
                  ? 'bg-chocolate text-white shadow-warm-sm'
                  : 'text-chocolate/70 hover:text-chocolate'
              }`}
            >
              🍪 Cookies (4)
            </button>
            <button
              onClick={() => setSelectedFilter('muffins')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'muffins'
                  ? 'bg-chocolate text-white shadow-warm-sm'
                  : 'text-chocolate/70 hover:text-chocolate'
              }`}
            >
              🧁 Muffins (4)
            </button>
            <button
              onClick={() => setSelectedFilter('cakes')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedFilter === 'cakes'
                  ? 'bg-chocolate text-white shadow-warm-sm'
                  : 'text-chocolate/70 hover:text-chocolate'
              }`}
            >
              🍰 Cakes (4)
            </button>
          </div>
        </div>

        {/* Grille des Produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
