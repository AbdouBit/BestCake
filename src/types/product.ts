export type ProductCategory = 'cookies' | 'muffins' | 'cakes';

export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number; // e.g. 0 or +2€
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  ingredients: string[];
  allergens: string[];
  badge?: string;
  featured: boolean;
  available: boolean;
  preparationTime?: string;
  variants?: ProductVariant[];
}

export interface CategoryInfo {
  id: ProductCategory;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
}
