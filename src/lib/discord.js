import { formatPrice } from "@/lib/order";

const API_URL =
"https://espresso-house-api.maxneugrp.workers.dev/api/orders";

export function isDiscordConfigured() {
return Boolean(API_URL);
}

export async function sendOrderToDiscord(order) {
if (!API_URL) {
throw new Error("API ist nicht konfiguriert.");
}

const payload = {
id:
order.id ||
(typeof crypto !== "undefined" &&
typeof crypto.randomUUID === "function"
? crypto.randomUUID()
: `${Date.now()}-${Math.random().toString(36).slice(2)}`),

staff_name:
  order.staff_name ||
  order.name ||
  "",

note: order.note || "",

items: (order.items || []).map((item) => ({
  name: item.name,
  price: Number(item.price) || 0,
  quantity:
    Number(item.quantity ?? item.qty) || 0,
})),

total: Number(order.total) || 0,

item_count: (order.items || []).reduce(
  (sum, item) =>
    sum +
    (Number(item.quantity ?? item.qty) || 0),
  0
),

};

if (!payload.staff_name) {
throw new Error("Mitarbeiter fehlt.");
}

if (!payload.items.length) {
throw new Error("Keine Artikel vorhanden.");
}

const response = await fetch(API_URL, {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(payload),
});

const result = await response
.json()
.catch(() => ({}));

if (!response.ok) {
throw new Error(
result.error ||
`API-Fehler (${response.status})`
);
}

return result;
}
