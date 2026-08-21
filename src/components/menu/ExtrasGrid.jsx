import { formatPrice } from "@/lib/order";

export default function ExtrasGrid({ items }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5">
      {items.map((it) => (
        <li key={it.id} className="flex items-baseline gap-2">
          <span className="text-sm text-[#1A1A1A] whitespace-nowrap">{it.name}</span>
          <span className="flex-1 border-b border-dotted border-[#1A1A1A]/25 -mb-1" />
          <span className="text-sm font-semibold text-[#1A1A1A] tabular-nums whitespace-nowrap">
            {formatPrice(it.price)}
          </span>
        </li>
      ))}
    </ul>
  );
}