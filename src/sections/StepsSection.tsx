import React from 'react';
import { ShoppingBag, Calendar, MessageSquare } from 'lucide-react';
import { BRAND_NAME } from '../config/config';

export const StepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: ShoppingBag,
      title: 'Choisissez vos gourmandises',
      desc: 'Parcourez notre sélection de cookies, muffins ou cakes et composez votre panier selon vos envies.',
    },
    {
      num: '02',
      icon: Calendar,
      title: 'Préparez votre commande',
      desc: 'Sélectionnez votre mode (retrait atelier ou livraison) ainsi que la date et le créneau souhaités.',
    },
    {
      num: '03',
      icon: MessageSquare,
      title: 'Continuez sur WhatsApp',
      desc: 'Votre récapitulatif est généré en 1 clic pour finaliser les détails directement avec notre équipe.',
    },
  ];

  return (
    <section id="etapes" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
            Simplicité & Proximité
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate">
            Votre commande en 3 étapes faciles.
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto mt-2">
            Pas de création de compte superflue. Un échange humain et direct avec la maison {BRAND_NAME}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative bg-surface p-8 rounded-3xl border border-chocolate/8 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-accent/30">
                      {st.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-surface-warm flex items-center justify-center text-chocolate shadow-warm-sm">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-chocolate mb-2">
                    {st.title}
                  </h3>

                  <p className="text-xs text-muted leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-chocolate/5">
                  <span className="text-[11px] font-semibold text-accent flex items-center gap-1.5">
                    Étape {idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
