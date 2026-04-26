import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos",   href: "#projects"   },
  { label: "Sobre mí",   href: "#about"      },
  { label: "Contacto",   href: "#contact"    },
];

export default function Header() {
  // State management
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      {/* Header Container */}
      <header
        className={`fixed z-50 transition-all duration-300 left-4 right-4 top-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-[90%] sm:max-w-7xl rounded-2xl overflow-hidden ${
          scrolled
            ? "border border-white/10 bg-[#111111]/85 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent border border-transparent"
        }`}
        role="banner"
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#ff8400] transition-all duration-150"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progreso de lectura"
        />

        {/* Header Content */}
        <div className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-5">

          {/* Brand Logo */}
          <a
            href="#inicio"
            className="text-2xl font-mono font-bold tracking-tighter text-white transition-colors duration-300 hover:text-[#ff8400]"
            aria-label="Ir al inicio"
          >
            <span className="text-[#ff8400]">&lt;</span>/<span className="text-[#ff8400]">&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Navegación principal" className="hidden sm:block">
            <ul className="flex items-center gap-8 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative text-[#B8B9B6] transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff8400] after:transition-all after:duration-300 hover:after:w-full"
                    aria-label={`Ir a ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <a
            href="mailto:cluisbolivarb@gmail.com"
            className="hidden rounded-full border border-[#ff8400]/40 px-5 py-2 text-sm text-[#ff8400] transition-all duration-300 hover:bg-[#ff8400] hover:text-black sm:block"
            aria-label="Enviar email a Cesar"
          >
            Hablemos
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 sm:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 sm:hidden ${
            mobileOpen ? "max-h-72 border-t border-white/8" : "max-h-0"
          }`}
        >
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col gap-1 bg-[#111111]/95 px-5 pb-5 pt-3 backdrop-blur-md">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-sm text-[#B8B9B6] transition-all duration-200 hover:bg-white/5 hover:text-white"
                    aria-label={`Ir a ${item.label}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-white/8 pt-3">
                <a
                  href="mailto:cluisbolivarb@gmail.com"
                  onClick={handleNavClick}
                  className="block rounded-xl bg-[#ff8400]/10 px-4 py-3 text-sm font-medium text-[#ff8400] transition hover:bg-[#ff8400]/20"
                >
                  ✉ Hablemos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content overlap with fixed header */}
      <div className="h-[68px]" aria-hidden="true" />
    </>
  );
}