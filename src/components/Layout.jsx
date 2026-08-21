import { Outlet, NavLink } from "react-router-dom";
import { Coffee, UtensilsCrossed } from "lucide-react";

const navItems = [
  { to: "/", label: "Bestellen", icon: Coffee, end: true },
  { to: "/menu", label: "Speisekarte", icon: UtensilsCrossed, end: false },
];

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-sm">
              <Coffee className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <span className="font-heading text-lg font-semibold tracking-tight">Espresso House</span>
              <span className="block text-[11px] text-muted-foreground -mt-0.5">Kundenbestellung</span>
            </div>
          </NavLink>

          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <Outlet />
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-8 text-center text-xs text-muted-foreground">
        Espresso House · Online-Bestellung
      </footer>
    </div>
  );
}