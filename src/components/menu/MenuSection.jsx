import MenuItemRow from "./MenuItemRow";

export default function MenuSection({ name, items }) {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-heading text-base font-bold uppercase tracking-[0.16em] text-[#5A1D20]">{name}</h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((p) => (
          <MenuItemRow
            key={p.id}
            number={p.number}
            name={p.name}
            price={p.price}
            description={p.description}
          />
        ))}
      </ul>
    </section>
  );
}