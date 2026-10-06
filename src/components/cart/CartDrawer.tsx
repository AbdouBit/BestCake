import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../services/whatsappService';
import { Button } from '../ui/Button';

interface CartDrawerProps {
  onStartCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onStartCheckout }) => {
  const { isCartOpen, closeCart, items, updateQuantity, removeFromCart, totalAmount, totalItems } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-chocolate/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface shadow-warm-xl border-l border-chocolate/10 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-chocolate/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-accent" />
              <h2 className="font-serif text-xl font-bold text-chocolate">
                Votre Commande
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-chocolate/10 text-chocolate">
                {totalItems}
              </span>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors focus:outline-none"
              aria-label="Fermer le panier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-cream/40 flex items-center justify-center mb-4 text-chocolate/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate mb-1">
                  Votre panier est encore vide
                </h3>
                <p className="text-xs text-muted max-w-xs mb-6">
                  Laissez-vous tenter par nos cookies fondants, muffins ultra-moelleux ou nos cakes faits maison !
                </p>
                <Button variant="secondary" size="sm" onClick={closeCart}>
                  Découvrir nos gourmandises
                </Button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-2xl bg-surface-warm/40 border border-chocolate/5 hover:border-chocolate/10 transition-all"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-18 w-20 h-20 object-cover rounded-xl bg-cream/50 flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-sm font-bold text-chocolate line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted hover:text-red-500 transition-colors p-1"
                        aria-label="Supprimer cet article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs font-semibold text-accent">
                      {formatPrice(item.product.price * item.quantity)}
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-chocolate/15 rounded-full bg-white px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="text-chocolate hover:text-accent p-0.5"
                          aria-label="Diminuer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-chocolate min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="text-chocolate hover:text-accent p-0.5"
                          aria-label="Augmenter"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-chocolate/10 bg-background/50 space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-muted text-xs">
                  <span>Préparation artisanale</span>
                  <span className="text-emerald-700 font-medium">Offerte</span>
                </div>
                <div className="flex justify-between font-serif text-lg font-bold text-chocolate pt-2 border-t border-chocolate/10">
                  <span>Total</span>
                  <span>{formatPrice(totalAmount)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                fullWidth
                size="lg"
                onClick={() => {
                  closeCart();
                  onStartCheckout();
                }}
                className="gap-2 group"
              >
                <span>Continuer ma commande</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-[11px] text-center text-muted">
                Validation directe et personnalisée via WhatsApp
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
