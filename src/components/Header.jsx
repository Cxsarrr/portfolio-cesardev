const NAV_ITEMS = [
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí', href: '#about' },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between py-12 px-6 md:px-22">
      {/* Logo */}
      <div className="text-2xl text-[#ffffff] tracking-tighter hover:opacity-80 transition-opacity cursor-pointer"><ul><a href="#inicio">&lt;/&gt;</a></ul>
      </div>

      {/* Navigation */}
      <nav id="inicio">
        <ul className="flex items-center gap-4 sm:gap-8 text-sm font-medium text-gray-400">
          {NAV_ITEMS.map((i) => (
            <li key={i.href}>
              <a href={i.href} className="inline-block hover:opacity-80 hover:text-[#ff8400] transition-all duration-300 cursor-pointer">{i.label} </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}