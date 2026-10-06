import React, { useState } from 'react';
import { X, Plus, Minus, Check, Sparkles, Heart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { formatPrice } from '../../services/whatsappService';
import { BRAND_NAME } from '../../config/config';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-chocolate/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-surface rounded-3xl max-w-2xl w-full shadow-warm-xl overflow-hidden z-10 border border-chocolate/10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-chocolate flex items-center justify-center shadow-warm-sm transition-all focus:outline-none"
          aria-label="Fermer la vue produit"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Colonne */}
        <div className="md:w-1/2 relative bg-cream/30 h-64 md:h-auto overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <Badge variant="accent">{product.badge}</Badge>
            </div>
          )}
        </div>

        {/* Détails Colonne */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.category} artisanal</span>
            </div>

            <h2 className="font-serif text-2xl font-bold text-chocolate mb-2">
              {product.name}
            </h2>

            <div className="text-xl font-serif font-bold text-chocolate mb-4">
              {formatPrice(product.price * quantity)}
              {quantity > 1 && (
                <span className="text-xs font-normal text-muted ml-2">
                  ({formatPrice(product.price)} / unité)
                </span>
              )}
            </div>

            <p className="text-sm text-muted leading-relaxed mb-6">
              {product.longDescription || product.description}
            </p>

            {/* Ingrédients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-chocolate/80 mb-2">
                  Ingrédients nobles
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-chocolate/5 text-chocolate/90"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Allergènes */}
            {product.allergens && product.allergens.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">
                  Allergènes
                </h4>
                <p className="text-xs text-muted/80">
                  {product.allergens.join(', ')}
                </p>
              </div>
            )}

            {/* Note d'amour */}
            <div className="flex items-center gap-2 text-xs text-accent font-medium py-2 px-3 rounded-xl bg-accent/5 mb-6">
              <Heart className="w-4 h-4 fill-accent" />
              <span>Préparé avec amour chez {BRAND_NAME}</span>
            </div>
          </div>

          {/* Action Quantité & Ajout */}
          <div className="pt-4 border-t border-chocolate/10 flex items-center gap-4">
            <div className="flex items-center border border-chocolate/20 rounded-full px-3 py-1.5 bg-background">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-chocolate hover:text-accent p-1 focus:outline-none"
                aria-label="Diminuer la quantité"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-3 font-semibold text-sm text-chocolate min-w-[24px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-chocolate hover:text-accent p-1 focus:outline-none"
                aria-label="Augmenter la quantité"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <Button
              variant="primary"
              fullWidth
              onClick={handleAdd}
              className="gap-2"
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ajouté au panier !</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Ajouter au panier</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
