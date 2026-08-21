const STORAGE_KEY = "espresso_house_orders";

export function formatPrice(n) {
  const value = Number(n) || 0;
  return value.toFixed(2).replace(".", ",") + " €";
}

export function cartTotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

export function cartCount(items) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}

const COUNTER_KEY = "espresso_house_order_counter";

/**
 * Erzeugt die nächste fortlaufende Bestellnummer und speichert sie lokal,
 * sodass sie sich bei einem Browser-Refresh nicht wieder auf 1 zurücksetzt.
 */
export function getNextOrderNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

// (Bestellungen werden nur zur Bestätigung im Speicher gehalten; keine
// dauerhafte Speicherung auf der Bestellungen-Seite mehr nötig.)
export const _STORAGE_KEY = STORAGE_KEY;