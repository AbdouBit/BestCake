import React from 'react';
import { Plus, Check, Eye } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { Badge } from '../ui/Badge';
import { formatPrice } from '../../services/whatsappService';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { addToCart, lastAddedProductId } = useCart();
  const isJustAdded = lastAddedProductId === product.id;

  return (
    <div
      className="group relative bg-surface rounded-3xl overflow-hidden border border-chocolate/8 shadow-warm-sm hover:shadow-warm-xl transition-all duration-500 flex flex-col justify-between"
    >
      {/* Zone Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream/30 cursor-pointer" onClick={() => onOpenDetails(product)}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge éventuel */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <Badge variant={product.badge === 'Coup de cœur' ? 'accent' : 'honey'}>
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Bouton Aperçu Rapide au Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-chocolate text-xs font-semibold shadow-warm-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-accent" />
            Voir la recette
          </span>
        </div>
      </div>

      {/* Contenu de la Card */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2 mb-1.5">
            <h3
              onClick={() => onOpenDetails(product)}
              className="font-serif text-lg font-bold text-chocolate hover:text-accent transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
            <span className="font-serif font-bold text-base text-chocolate whitespace-nowrap">
              {formatPrice(product.price)}
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        {/* Action Ajouter */}
        <div className="pt-2 border-t border-chocolate/5 flex items-center justify-between gap-3">
          <span className="text-[11px] font-medium text-muted/70 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Fait maison
          </span>

          <button
            onClick={() => addToCart(product, 1)}
            disabled={!product.available}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/30 ${
              isJustAdded
                ? 'bg-emerald-700 text-white scale-105'
                : 'bg-chocolate/5 hover:bg-chocolate text-chocolate hover:text-white'
            }`}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            {isJustAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Ajouté !</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Ajouter</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
