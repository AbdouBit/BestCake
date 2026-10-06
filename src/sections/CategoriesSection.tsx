import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { ProductCategory } from '../types/product';

interface CategoriesSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* En-tête de section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
            Nos Univers Gourmands
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Qu'est-ce qui vous ferait plaisir ?
          </h2>
        </div>
        <p className="text-sm text-muted max-w-sm">
          Trois spécialités faites maison, pensées pour combler toutes les envies sucrées.
        </p>
      </div>

      {/* Grille des 3 Catégories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative bg-surface rounded-3xl overflow-hidden border border-chocolate/8 shadow-warm-sm hover:shadow-warm-xl transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Image éditoriale */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream/30">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/85 via-chocolate/30 to-transparent" />

              {/* Tag nombre de recettes */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-chocolate shadow-warm-sm">
                {cat.itemCount} recettes
              </div>

              {/* Contenu superposé */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                    {cat.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                <p className="text-xs font-semibold text-honey/90 tracking-wide uppercase">
                  {cat.subtitle}
                </p>

                <p className="text-xs text-white/80 line-clamp-2 pt-1 font-light leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
