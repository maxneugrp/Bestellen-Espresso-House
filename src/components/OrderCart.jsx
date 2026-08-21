import { Plus, Minus, Trash2, Send, User, StickyNote, ShoppingCart } from "lucide-react";
import { formatPrice, cartTotal, cartCount } from "@/lib/order";

export default function OrderCart({
  items,
  name,
  setName,
  note,
  setNote,
  onInc,
  onDec,
  onRemove,
  onSubmit,
  submitting,
}) {
  const total = cartTotal(items);
  const count = cartCount(items);
  const empty = items.length === 0;

  return (
    <div className="bg-card rounded-2xl border border-border shadow-sm flex flex-col">
      <div className="flex items-center justify-between p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <h2 className="font-heading text-lg font-semibold">Deine Bestellung</h2>
        </div>
        <span className="text-sm text-muted-foreground">{count} Artikel</span>
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> Dein Roblox Username
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="z. B. lovebueno12"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
          />
        </div>

        {/* Notiz */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
            <StickyNote className="w-3.5 h-3.5" /> Notiz (optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            placeholder="z. B. Hafermilch, zum Mitnehmen…"
            className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
          />
        </div>

        {/* Artikel */}
        <div className="border-t border-border pt-4">
          {empty ? (
            <div className="text-center py-8 text-sm text-muted-foreground">
              Noch nichts ausgewählt.<br />Klicke links auf ein Produkt.
            </div>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 py-1">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{formatPrice(item.price)} je</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-accent rounded-full p-1">
                    <button
                      type="button"
                      onClick={() => onDec(item.id)}
                      className="w-7 h-7 rounded-full bg-card grid place-items-center hover:bg-primary hover:text-primary-foreground transition shadow-sm"
                      aria-label="Menge verringern"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold tabular-nums">{item.qty}</span>
                    <button
                      type="button"
                      onClick={() => onInc(item.id)}
                      className="w-7 h-7 rounded-full bg-card grid place-items-center hover:bg-primary hover:text-primary-foreground transition shadow-sm"
                      aria-label="Menge erhöhen"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="w-20 text-right text-sm font-semibold tabular-nums">
                    {formatPrice(item.price * item.qty)}
                  </span>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="w-7 h-7 grid place-items-center text-muted-foreground hover:text-destructive transition"
                    aria-label="Entfernen"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summe + Submit */}
        <div className="border-t border-border pt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Gesamt ({count} Artikel)</span>
            <span className="text-2xl font-heading font-bold text-foreground tabular-nums">{formatPrice(total)}</span>
          </div>
          <button
            type="button"
            onClick={onSubmit}
            disabled={empty || submitting || !name.trim()}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 shadow-sm hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                Wird gesendet…
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Bestellung aufgeben
              </>
            )}
          </button>
          {empty || !name.trim() ? (
            <p className="text-xs text-muted-foreground text-center">
              {empty ? "Füge Artikel hinzu, um zu bestellen." : "Bitte gib deinen Namen ein."}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}