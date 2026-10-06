import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, Phone, Copy, Check, MessageSquare, Clock, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';
import { CustomerInfo, Order } from '../../types/order';
import { createOrder } from '../../services/orderService';
import { generateWhatsAppMessage, generateWhatsAppUrl, formatPrice } from '../../services/whatsappService';
import { Button } from '../ui/Button';
import { Input, Textarea } from '../ui/Input';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { items, totalAmount, clearCart } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  // Form State
  const [formData, setFormData] = useState<CustomerInfo>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    deliveryMethod: 'pickup',
    address: '',
    postalCode: '',
    city: '',
    desiredDate: '',
    desiredTimeSlot: '15h00 - 17h00',
    note: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerInfo, string>>>({});

  if (!isOpen) return null;

  const validateStep2 = () => {
    const errs: Partial<Record<keyof CustomerInfo, string>> = {};
    if (!formData.firstName.trim()) errs.firstName = 'Votre prénom est requis';
    if (!formData.lastName.trim()) errs.lastName = 'Votre nom est requis';
    if (!formData.phone.trim()) errs.phone = 'Votre numéro de téléphone / WhatsApp est requis';
    if (!formData.desiredDate) errs.desiredDate = 'Veuillez indiquer la date souhaitée';

    if (formData.deliveryMethod === 'delivery') {
      if (!formData.address?.trim()) errs.address = 'L\'adresse de livraison est requise';
      if (!formData.postalCode?.trim()) errs.postalCode = 'Le code postal est requis';
      if (!formData.city?.trim()) errs.city = 'La ville est requise';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        const order = createOrder(items, formData);
        setCompletedOrder(order);
        setStep(3);
        clearCart();
        
        // Déclenchement de confettis festifs
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2B1810', '#C95D3B', '#E5A84B', '#B86B35']
        });

        // Ouverture DIRECTE et immédiate de WhatsApp avec le bon de commande
        const waUrl = generateWhatsAppUrl(order);
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const handleCopyMessage = () => {
    if (!completedOrder) return;
    const msg = generateWhatsAppMessage(completedOrder);
    navigator.clipboard.writeText(msg);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleOpenWhatsApp = () => {
    if (!completedOrder) return;
    const url = generateWhatsAppUrl(completedOrder);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-chocolate/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => {
          if (step !== 3) onClose();
        }}
      />

      {/* Container */}
      <div className="relative bg-surface rounded-3xl max-w-xl w-full shadow-warm-xl overflow-hidden z-10 border border-chocolate/10 flex flex-col max-h-[90vh]">
        
        {/* Header Progress */}
        <div className="p-6 border-b border-chocolate/10 bg-background/50 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
              Étape 0{step} sur 03
            </span>
            <h3 className="font-serif text-xl font-bold text-chocolate">
              {step === 1 && "Récapitulatif de votre panier"}
              {step === 2 && "Coordonnées & Modalités"}
              {step === 3 && "C'est presque prêt ! 🎉"}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-chocolate hover:bg-chocolate/5 transition-colors focus:outline-none"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: Récapitulatif simple */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-xs text-muted">
                Vérifiez votre sélection avant de préciser votre date et créneau de retrait ou livraison :
              </p>
              
              <div className="divide-y divide-chocolate/5 bg-surface-warm/30 rounded-2xl p-3 border border-chocolate/5">
                {items.map((item) => (
                  <div key={item.product.id} className="py-2.5 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-chocolate/10 text-chocolate flex items-center justify-center text-xs font-bold">
                        {item.quantity}×
                      </span>
                      <span className="font-medium text-chocolate">{item.product.name}</span>
                    </div>
                    <span className="font-serif font-bold text-chocolate">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex justify-between items-baseline font-serif text-lg font-bold text-chocolate border-t border-chocolate/10">
                <span>Total estimé</span>
                <span className="text-xl text-accent">{formatPrice(totalAmount)}</span>
              </div>
            </div>
          )}

          {/* STEP 2: Informations client */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Prénom"
                  required
                  placeholder="Amine"
                  value={formData.firstName}
                  error={errors.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <Input
                  label="Nom"
                  required
                  placeholder="Dupont"
                  value={formData.lastName}
                  error={errors.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Input
                  label="Téléphone / WhatsApp"
                  required
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  error={errors.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <Input
                  label="Email (optionnel)"
                  type="email"
                  placeholder="votre@email.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Mode de récupération */}
              <div className="pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-2">
                  Mode de récupération <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'pickup' })}
                    className={`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all ${
                      formData.deliveryMethod === 'pickup'
                        ? 'border-accent bg-accent/5 ring-2 ring-accent/20'
                        : 'border-chocolate/15 bg-white hover:bg-surface-warm/40'
                    }`}
                  >
                    <span className="text-xs font-bold text-chocolate flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      Retrait à l'atelier
                    </span>
                    <span className="text-[11px] text-muted">Click & Collect gratuit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'delivery' })}
                    className={`p-3 rounded-2xl border text-left flex flex-col gap-1 transition-all ${
                      formData.deliveryMethod === 'delivery'
                        ? 'border-accent bg-accent/5 ring-2 ring-accent/20'
                        : 'border-chocolate/15 bg-white hover:bg-surface-warm/40'
                    }`}
                  >
                    <span className="text-xs font-bold text-chocolate flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-accent" />
                      Livraison locale
                    </span>
                    <span className="text-[11px] text-muted">Sur créneau réservé</span>
                  </button>
                </div>
              </div>

              {/* Champs Livraison conditionnels */}
              {formData.deliveryMethod === 'delivery' && (
                <div className="space-y-3 p-4 rounded-2xl bg-surface-warm/40 border border-chocolate/10">
                  <Input
                    label="Adresse complète"
                    required
                    placeholder="12 rue de la Paix"
                    value={formData.address}
                    error={errors.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="Code postal"
                      required
                      placeholder="75001"
                      value={formData.postalCode}
                      error={errors.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    />
                    <Input
                      label="Ville"
                      required
                      placeholder="Paris"
                      value={formData.city}
                      error={errors.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Date et Créneau */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <Input
                  label="Date souhaitée"
                  type="date"
                  required
                  value={formData.desiredDate}
                  error={errors.desiredDate}
                  onChange={(e) => setFormData({ ...formData, desiredDate: e.target.value })}
                />
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate/80 mb-1.5">
                    Créneau horaire
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-white border border-chocolate/15 rounded-xl text-chocolate text-sm focus:outline-none focus:ring-4 focus:ring-accent/20"
                    value={formData.desiredTimeSlot}
                    onChange={(e) => setFormData({ ...formData, desiredTimeSlot: e.target.value })}
                  >
                    <option value="11h00 - 13h00">11h00 - 13h00 (Midi)</option>
                    <option value="14h00 - 16h00">14h00 - 16h00 (Début d'après-midi)</option>
                    <option value="16h00 - 18h00">16h00 - 18h00 (Goûter)</option>
                    <option value="18h00 - 19h30">18h00 - 19h30 (Soirée)</option>
                  </select>
                </div>
              </div>

              {/* Note particulière */}
              <Textarea
                label="Message particulier (optionnel)"
                placeholder="Exemple : Commande pour un anniversaire, allergie spécifique, etc."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
            </div>
          )}

          {/* STEP 3: Confirmation WhatsApp avec Fallback */}
          {step === 3 && completedOrder && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-warm-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-chocolate mb-2">
                  Votre bon de commande est prêt !
                </h4>
                <p className="text-sm text-muted max-w-md mx-auto leading-relaxed">
                  Nous finalisons ensemble les détails de préparation directement sur WhatsApp.
                </p>
              </div>

              {/* Action Principale WhatsApp */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleOpenWhatsApp}
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white gap-2 shadow-warm-md text-base"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Envoyer ma commande sur WhatsApp</span>
                </Button>
              </div>

              {/* Fallback en cas de blocage d'ouverture */}
              <div className="p-4 rounded-2xl bg-surface-warm/50 border border-chocolate/10 text-left space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-chocolate flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-accent" />
                    Option de secours : Copier le message
                  </span>
                  <button
                    onClick={handleCopyMessage}
                    className="flex items-center gap-1 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white p-3 rounded-xl border border-chocolate/10 text-xs font-mono text-muted max-h-32 overflow-y-auto whitespace-pre-wrap">
                  {generateWhatsAppMessage(completedOrder)}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Modal Actions */}
        <div className="p-6 border-t border-chocolate/10 bg-background/50 flex items-center justify-between">
          {step === 1 && (
            <>
              <Button variant="ghost" onClick={onClose}>
                Modifier mon panier
              </Button>
              <Button variant="primary" onClick={handleNextStep} className="gap-2">
                <span>Renseigner mes coordonnées</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <Button variant="ghost" onClick={() => setStep(1)} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Retour</span>
              </Button>
              <Button variant="primary" onClick={handleNextStep} className="gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white">
                <span>Envoyer sur WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </>
          )}

          {step === 3 && (
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                onClose();
                setStep(1);
              }}
            >
              Retour à l'accueil
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
