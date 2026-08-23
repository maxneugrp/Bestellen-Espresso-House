import { Check, Receipt } from "lucide-react";
import { formatPrice } from "@/lib/order";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function OrderSuccess({ order, onNewOrder }) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-8 flex flex-col items-center text-center">
        <span className="w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-sm mb-4">
          <Check className="w-8 h-8" />
        </span>
        <h1 className="font-heading text-2xl font-bold">Danke, {order.name}!</h1>
        <p className="text-muted-foreground mt-1">Deine Mutter</p>

        <div className="mt-5 w-full flex items-center justify-center gap-2 bg-accent rounded-xl py-3 px-4">
          <Receipt className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Deine Bestellnummer:</span>
          <span className="text-lg font-heading font-bold text-foreground">#{order.orderNumber}</span>
        </div>

        <ul className="w-full mt-5 flex flex-col gap-1.5 text-left border-t border-border pt-4">
          {order.items.map((i, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm">
              <span className="text-foreground">{i.qty}× {i.name}</span>
              <span className="text-muted-foreground tabular-nums">{formatPrice(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>

        <div className="w-full flex items-center justify-between border-t border-border pt-4 mt-4">
          <span className="text-sm text-muted-foreground">Gesamtsumme</span>
          <span className="text-xl font-heading font-bold text-primary tabular-nums">{formatPrice(order.total)}</span>
        </div>

        {order.note && (
          <div className="w-full text-left mt-3">
            <span className="text-xs font-medium text-muted-foreground">Deine Notiz: </span>
            <span className="text-sm text-foreground">{order.note}</span>
          </div>
        )}

        <p className="text-xs text-muted-foreground mt-4">Bestellt am {formatDate(order.date)}</p>

        <button
          type="button"
          onClick={onNewOrder}
          className="mt-6 w-full rounded-xl bg-primary text-primary-foreground font-semibold py-3 shadow-sm hover:bg-primary/90 transition"
        >
          Neue Bestellung starten
        </button>
      </div>
    </div>
  );
}