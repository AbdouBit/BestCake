import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { CategoriesSection } from './sections/CategoriesSection';
import { FeaturedSection } from './sections/FeaturedSection';
import { CraftSection } from './sections/CraftSection';
import { StepsSection } from './sections/StepsSection';
import { CTASection } from './sections/CTASection';
import { CartDrawer } from './components/cart/CartDrawer';
import { ProductModal } from './components/products/ProductModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';
import { Product, ProductCategory } from './types/product';

export const AppContent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<ProductCategory | 'all'>('all');

  const scrollToCatalogue = (category?: ProductCategory) => {
    if (category) {
      setActiveCategoryFilter(category);
    }
    const elem = document.getElementById('catalogue');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-text font-sans antialiased selection:bg-accent/20 selection:text-chocolate">
      {/* Barre de navigation principale */}
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-1">
        <HeroSection
          onDiscover={() => scrollToCatalogue()}
          onOrderNow={() => scrollToCatalogue()}
        />

        <StorySection />

        <CategoriesSection
          onSelectCategory={(cat) => scrollToCatalogue(cat)}
        />

        <FeaturedSection
          key={activeCategoryFilter}
          initialCategory={activeCategoryFilter}
          onOpenDetails={(product) => setSelectedProduct(product)}
        />

        <CraftSection />

        <StepsSection />

        <CTASection
          onOrderNow={() => scrollToCatalogue()}
        />
      </main>

      {/* Pied de page */}
      <Footer />

      {/* Cart Drawer latéral */}
      <CartDrawer
        onStartCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Fiche détaillée produit (Modal) */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Tunnel Checkout en 3 étapes */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
