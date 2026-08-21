import { Coffee, MapPin, Clock } from "lucide-react";
import { categories, getProductsByCategory } from "@/lib/menu";
import MenuSection from "@/components/menu/MenuSection";
import SpezialBox from "@/components/menu/SpezialBox";
import ExtrasGrid from "@/components/menu/ExtrasGrid";

function renderSection(cat) {
  const items = getProductsByCategory(cat.id);
  if (!items.length) return null;

  if (cat.id === "spezial") {
    return <SpezialBox key={cat.id} product={items[0]} />;
  }

  if (cat.id === "extras") {
    return (
      <section key={cat.id} className="flex flex-col gap-3">
        <h3 className="font-heading text-base font-bold uppercase tracking-[0.16em] text-[#5A1D20]">Extras</h3>
        <ExtrasGrid items={items} />
      </section>
    );
  }

  return <MenuSection key={cat.id} name={cat.name} items={items} />;
}

export default function MenuPage() {
  const col1 = categories.filter((c) => c.column === 1);
  const col2 = categories.filter((c) => c.column === 2);

  return (
    <div className="flex items-start justify-center py-6 px-4">
      <div className="w-full max-w-5xl bg-[#FDFBF7] border-[3px] border-[#5A1D20] rounded p-6 sm:p-10 shadow-sm">
        {/* Header */}
        <header className="text-center border-b border-[#5A1D20]/30 pb-6">
          <span className="inline-flex w-12 h-12 rounded-full border-2 border-[#5A1D20] items-center justify-center mb-2">
            <Coffee className="w-6 h-6 text-[#5A1D20]" />
          </span>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-[0.2em] text-[#1A1A1A]">ESPRESSO HOUSE</h1>
          <p className="text-[11px] tracking-[0.3em] text-[#1A1A1A]/70 mt-1">RÖSTEREI &amp; KONDITOREI</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-3 text-sm text-[#E11D48]">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Springfield 1105</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> River City 205</span>
          </div>
        </header>

        {/* Body */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 pt-8 relative">
          <div className="hidden md:block absolute top-2 bottom-2 left-1/2 -ml-px border-l border-dashed border-[#1A1A1A]/20" />
          <div className="flex flex-col gap-8">{col1.map(renderSection)}</div>
          <div className="flex flex-col gap-8">{col2.map(renderSection)}</div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#5A1D20]/30 mt-8 pt-5 text-center">
          <p className="flex items-center justify-center gap-1.5 text-sm text-[#1A1A1A]/80 font-medium">
            <Clock className="w-4 h-4 text-[#5A1D20]" /> Mo – Sa 7:00 bis 19:00 Uhr
          </p>
          <p className="text-xs text-[#1A1A1A]/55 mt-2">
            Alle Preise inkl. der gesetzlichen Mehrwertsteuer. Abbildungen können abweichen.
          </p>
        </footer>
      </div>
    </div>
  );
}