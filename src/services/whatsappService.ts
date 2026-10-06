import { Order } from '../types/order';
import { WHATSAPP_NUMBER, BRAND_NAME } from '../config/config';

/**
 * Service centralisé de génération du message de commande WhatsApp
 * Garanti : Utilise UNIQUEMENT la variable WHATSAPP_NUMBER
 */

export function formatPrice(amount: number): string {
  return `${amount.toFixed(2).replace('.', ',')} €`;
}

export function generateWhatsAppMessage(order: Order): string {
  const { items, customer, totalAmount } = order;

  // Icône par catégorie
  const getItemIcon = (category: string) => {
    switch (category) {
      case 'cookies': return '🍪';
      case 'muffins': return '🧁';
      case 'cakes': return '🍰';
      default: return '✨';
    }
  };

  const formattedItems = items
    .map(item => {
      const icon = getItemIcon(item.product.category);
      const subtotal = item.product.price * item.quantity;
      return `${icon} ${item.quantity} × ${item.product.name} — ${formatPrice(subtotal)}`;
    })
    .join('\n');

  const deliveryText = customer.deliveryMethod === 'delivery' 
    ? `📦 Mode : Livraison à domicile\n📍 Adresse : ${customer.address || ''}, ${customer.postalCode || ''} ${customer.city || ''}`
    : `🏪 Mode : Retrait à l'atelier (Click & Collect)`;

  const message = [
    `Bonjour 👋`,
    ``,
    `Je souhaite passer une commande chez *${BRAND_NAME}* :`,
    ``,
    formattedItems,
    ``,
    `💰 *Total : ${formatPrice(totalAmount)}*`,
    ``,
    `👤 *Client :* ${customer.firstName} ${customer.lastName}`,
    `📱 *Téléphone :* ${customer.phone}`,
    customer.email ? `✉️ *Email :* ${customer.email}` : null,
    ``,
    deliveryText,
    `📅 *Date souhaitée :* ${customer.desiredDate}`,
    `🕐 *Créneau horaire :* ${customer.desiredTimeSlot}`,
    customer.note ? `\n💬 *Message particulier :*\n« ${customer.note} »` : null,
    ``,
    `Merci ${BRAND_NAME} ❤️`
  ]
    .filter(line => line !== null)
    .join('\n');

  return message;
}

export function generateWhatsAppUrl(order: Order): string {
  const rawNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const message = generateWhatsAppMessage(order);
  return `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;
}
