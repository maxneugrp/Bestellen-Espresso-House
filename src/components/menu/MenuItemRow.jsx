import { formatPrice } from "@/lib/order";

export default function MenuItemRow({ number, name, price, description }) {
  return (
    <li className="flex flex-col">
      <div className="flex items-baseline gap-2">
        {number != null && (
          <span className="font-semibold text-[#1A1A1A] tabular-nums w-5 shrink-0">{number}.</span>
        )}
        <span className="font-semibold text-[#1A1A1A]">{name}</span>
        <span className="flex-1 border-b border-dotted border-[#1A1A1A]/25 mx-1 -mb-1" />
        <span className="font-semibold text-[#1A1A1A] tabular-nums shrink-0">{formatPrice(price)}</span>
      </div>
      {description && (
        <p className="italic text-xs text-[#1A1A1A]/60 ml-7 mt-0.5">{description}</p>
      )}
    </li>
  );
}