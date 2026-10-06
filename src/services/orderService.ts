import { Order, CartItem, CustomerInfo } from '../types/order';

const STORAGE_KEY = 'bsaha_orders';

export function createOrder(items: CartItem[], customer: CustomerInfo): Order {
  const totalAmount = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  const order: Order = {
    id: `BSH-${Date.now().toString().slice(-6)}`,
    items,
    customer,
    totalAmount,
    status: 'PENDING',
    createdAt: new Date().toISOString(),
  };

  // Stockage local pour historique / préparation future du back-office
  try {
    const existingOrders = getOrders();
    existingOrders.unshift(order);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingOrders.slice(0, 20)));
  } catch {
    // Silencieux si localStorage inaccessible
  }

  return order;
}

export function getOrders(): Order[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}
