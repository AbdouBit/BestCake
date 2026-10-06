import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export type DeliveryMethod = 'pickup' | 'delivery';

export type OrderStatus = 
  | 'PENDING' 
  | 'CONFIRMED' 
  | 'PREPARING' 
  | 'READY' 
  | 'COMPLETED' 
  | 'CANCELLED';

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  deliveryMethod: DeliveryMethod;
  address?: string;
  postalCode?: string;
  city?: string;
  desiredDate: string;
  desiredTimeSlot: string;
  note?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
}
