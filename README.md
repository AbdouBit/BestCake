# B'SAHA — Pâtisserie Artisanale & Gourmandises Faites Maison

> **Signature :** *« Le fait maison, généreux & réconfortant »*

Application web e-commerce moderne conçue pour **B'SAHA**, maison artisanale proposant des cookies fondants, muffins moelleux et cakes familiaux.

---

## 🍪 Identité Visuelle & Direction Artistique

- **Univers :** Chaleureux, réconfortant, artisanal et haut de gamme.
- **Palette chromatique en variables CSS** (`src/index.css`) :
  - `--color-background`: Crème ivoire chaud (`#FAF7F2`)
  - `--color-chocolate`: Cacao noir profond (`#2B1810`)
  - `--color-caramel`: Caramel beurre salé doré (`#B86B35`)
  - `--color-accent`: Terracotta chaud velouté (`#C95D3B`)
  - `--color-honey`: Miel doré & safran doux (`#E5A84B`)
- **Typographie :** *Playfair Display* (titres éditoriaux) & *Plus Jakarta Sans* (corps de texte et lisibilité).

---

## 🛠️ Technologies Utilisées

- **React 19** + **TypeScript**
- **Vite 6** (Build ultra-rapide)
- **Tailwind CSS** (Design system complet basé sur CSS variables)
- **Lucide React** (Iconographie épurée)
- **Canvas Confetti** (Célébration festive lors de la validation de commande)

---

## 📦 Structure du Projet

```
src/
├── config/
│   └── config.ts             # WHATSAPP_NUMBER unique, liens sociaux, configuration magasin
├── types/
│   ├── product.ts            # Définitions Product, CategoryInfo, Variant
│   └── order.ts              # Définitions Order, CartItem, CustomerInfo, OrderStatus
├── data/
│   └── products.ts           # 12 créations réelles (Cookies, Muffins, Cakes) avec ingrédients
├── services/
│   ├── whatsappService.ts    # Générateur de bon de commande WhatsApp et URL wa.me
│   └── orderService.ts       # Stockage et cycle de vie des commandes
├── context/
│   └── CartContext.tsx       # Gestion d'état du panier (persisté en localStorage)
├── components/
│   ├── ui/                   # Button, Badge, Input, Textarea
│   ├── navigation/           # Navbar (scroll blur, badge dynamique), Footer
│   ├── products/             # ProductCard, ProductModal (vue détaillée ingrédients & allergènes)
│   ├── cart/                 # CartDrawer (tiroir latéral avec ajustement des quantités)
│   └── checkout/             # CheckoutModal (tunnel 3 étapes : Panier → Infos → WhatsApp)
├── sections/
│   ├── HeroSection.tsx       # Hero cinématique et composition éditoriale
│   ├── StorySection.tsx      # Histoire familiale « Comme à la maison »
│   ├── CategoriesSection.tsx # Les 3 univers (Cookies, Muffins, Cakes)
│   ├── FeaturedSection.tsx   # Grille des 12 créations avec filtres par catégorie
│   ├── CraftSection.tsx      # Savoir-faire, matières premières nobles et ultra-fraîcheur
│   ├── StepsSection.tsx      # Parcours de commande en 3 étapes simples
│   └── CTASection.tsx        # Appel à l'action gourmand final
├── App.tsx                   # Orchestration globale
└── main.tsx                  # Point d'entrée de l'application
```

---

## 📱 Fonctionnalité Clé : Tunnel WhatsApp Intelligent

1. Le client sélectionne ses gourmandises (avec micro-interaction « *Ajouté !* »).
2. Il ouvre le panier (Cart Drawer) et clique sur **Continuer ma commande**.
3. Il renseigne ses coordonnées (Prénom, Nom, Téléphone/WhatsApp, Mode de récupération Retrait/Livraison, Date et Créneau horaire).
4. Le bon de commande est généré au format WhatsApp officiel avec récapitulatif précis, prix, totaux et message personnalisé.
5. Au clic sur **Envoyer ma commande sur WhatsApp**, l'application ouvre directement l'échange avec le numéro configuré.
6. **Option de secours (Fallback)** : Un bouton **Copier le message** permet de copier l'intégralité du texte formaté en un seul clic si WhatsApp tarde à s'ouvrir.

---

## ⚙️ Configuration Rapide

Pour changer le numéro WhatsApp de destination, modifiez uniquement la variable dans [src/config/config.ts](src/config/config.ts) :

```typescript
export const WHATSAPP_NUMBER = "+33612345678";
```

---

## 🚀 Lancement en local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build de production
npm run build
```
