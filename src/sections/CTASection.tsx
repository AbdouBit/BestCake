import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface CTASectionProps {
  onOrderNow: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOrderNow }) => {
  return (
    <section className="py-20 md:py-28 bg-chocolate text-[#FAF7F2] relative overflow-hidden">
      {/* Halos chaleureux */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-honey/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-honey">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Une envie irrésistible de douceur ?</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          On a quelque chose pour vous.
        </h2>

        <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-xl mx-auto leading-relaxed">
          Pour un goûter réconfortant, un anniversaire ou un moment de partage en famille, nous préparons vos fournées avec le plus grand soin.
        </p>

        <div className="pt-4">
          <Button
            variant="secondary"
            size="lg"
            onClick={onOrderNow}
            className="gap-3 shadow-warm-xl group text-base"
          >
            <span>Composer ma boîte gourmande</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
