import { formatPrice } from "@/lib/order";

export default function SpezialBox({ product }) {
  return (
    <div className="rounded-sm border-2 border-[#5A1D20] p-4">
      <h3 className="font-heading text-base font-bold uppercase tracking-[0.16em] text-[#5A1D20]">
        Espresso House Spezial
      </h3>
      <p className="text-sm italic text-[#1A1A1A]/80 mt-2">{product.description}</p>
      <p className="font-heading text-xl font-bold text-[#1A1A1A] mt-3 text-right tabular-nums">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}