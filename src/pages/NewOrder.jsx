import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { categories, getProductsByCategory } from "@/lib/menu";
import { cartTotal, getNextOrderNumber } from "@/lib/order";
import { sendOrderToDiscord, isDiscordConfigured } from "@/lib/discord";
import MenuCard from "@/components/MenuCard";
import OrderCart from "@/components/OrderCart";
import OrderSuccess from "@/components/OrderSuccess";

export default function NewOrder() {
  const { toast } = useToast();
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const inc = (id) => setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
  const dec = (id) =>
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  const remove = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const resetOrder = () => {
    setCart([]);
    setName("");
    setNote("");
    setConfirmed(null);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast({ variant: "destructive", title: "Name fehlt", description: "Bitte gib deinen Namen ein." });
      return;
    }
    if (cart.length === 0) {
      toast({ variant: "destructive", title: "Keine Artikel", description: "Bitte wähle zuerst Artikel aus." });
      return;
    }
    if (!isDiscordConfigured()) {
      toast({
        variant: "destructive",
        title: "Nicht konfiguriert",
        description: "Der Webhook ist nicht eingerichtet (src/lib/discord.js).",
      });
      return;
    }

    setSubmitting(true);
    try {
      const orderNumber = getNextOrderNumber();
      const cleanItems = cart.map((i) => ({ name: i.name, price: i.price, qty: i.qty }));
      const total = cartTotal(cart);
      const order = {
        orderNumber,
        date: new Date().toISOString(),
        name: name.trim(),
        note: note.trim(),
        items: cleanItems,
        total,
      };

      await sendOrderToDiscord(order);
      setConfirmed(order);
    } catch (err) {
      const message = err?.message || "Unbekannter Fehler beim Senden.";
      toast({ variant: "destructive", title: "Fehler beim Senden", description: message });
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmed) {
    return <OrderSuccess order={confirmed} onNewOrder={resetOrder} />;
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">Willkommen bei Espresso House</h1>
        <p className="text-muted-foreground mt-1">Stelle deine Bestellung zusammen — Klicke Produkte an, um sie hinzuzufügen.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {categories.map((cat) => {
            const items = getProductsByCategory(cat.id);
            if (!items.length) return null;
            return (
              <section key={cat.id} className="flex flex-col gap-3">
                <h2 className="font-heading text-xl font-semibold border-b border-border pb-2">{cat.name}</h2>
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {items.map((p) => (
                    <MenuCard key={p.id} product={p} qty={cart.find((i) => i.id === p.id)?.qty || 0} onAdd={() => addToCart(p)} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <OrderCart
              items={cart}
              name={name}
              setName={setName}
              note={note}
              setNote={setNote}
              onInc={inc}
              onDec={dec}
              onRemove={remove}
              onSubmit={handleSubmit}
              submitting={submitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}