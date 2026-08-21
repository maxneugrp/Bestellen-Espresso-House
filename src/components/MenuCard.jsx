import { Plus } from "lucide-react";
import { formatPrice } from "@/lib/order";

export default function MenuCard({ product, qty = 0, onAdd }) {
  const clickable = !!onAdd;
  return (
    <button
      type="button"
      disabled={!clickable}
      onClick={clickable ? onAdd : undefined}
      className={`group text-left bg-card rounded-2xl p-4 border border-border shadow-sm transition flex flex-col gap-2 h-full ${
        clickable
          ? "hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 cursor-pointer"
          : "cursor-default"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading font-semibold text-foreground leading-snug">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{product.description}</p>
        </div>
        {qty > 0 && (
          <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold grid place-items-center shadow-sm">
            {qty}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-auto pt-1">
        <span className="text-lg font-semibold text-primary">{formatPrice(product.price)}</span>
        {clickable && (
          <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
            <Plus className="w-4 h-4" />
          </span>
        )}
      </div>
    </button>
  );
}