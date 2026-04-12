const NAV_ITEMS = [
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí', href: '#about' },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-6 sm:px-12 sm:py-12 md:px-10 pointer-events-auto">
      <div className="text-2xl text-[#ffffff] tracking-tighter">
        <a href="#inicio" className="text-[#FFFFFF] hover:text-[#FF8400] cursor-pointer" aria-label="Ir al inicio">
          &lt;/&gt;
        </a>
      </div>

      <nav aria-label="Navegación principal">
        <ul className="hidden items-center gap-6 text-sm text-gray-400 sm:flex lg:gap-10">
          {NAV_ITEMS.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="inline-block cursor-pointer transition-all duration-300 hover:text-[#ff8400] hover:opacity-80" aria-label={`Ir a ${i.label}`}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-3 text-xs text-gray-400 sm:hidden">
          {NAV_ITEMS.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="inline-block cursor-pointer transition-colors duration-300 hover:text-[#ff8400]" aria-label={`Ir a ${i.label}`}>
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}