import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos",   href: "#projects"   },
  { label: "Sobre mí",   href: "#about"      },
  { label: "Contacto",   href: "#contact"    },
];

const socialLinks = [
  { label: "GitHub",   href: "https://github.com/Cxsarrr",         Icon: FaGithub,   hoverColor: "#ffffff" },
  { label: "LinkedIn", href: "https://linkedin.com/in/cesarbolivar", Icon: FaLinkedin, hoverColor: "#0A66C2" },
  { label: "Email",    href: "mailto:cluisbolivarb@gmail.com",       Icon: MdEmail,    hoverColor: "#EA4335" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-12 border-t border-white/5 bg-transparent px-5 py-12 text-center"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        
        {/* Logo and branding */}
        <a
          href="#inicio"
          className="text-3xl font-mono font-bold tracking-tighter text-white transition-colors duration-300 hover:text-[#ff8400]"
          aria-label="Ir al inicio"
        >
          <span className="text-[#ff8400]">&lt;</span>/<span className="text-[#ff8400]">&gt;</span>
        </a>

        {/* Primary navigation links */}
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-[#B8B9B6]">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social media icons */}
        <div className="flex gap-6">
          {socialLinks.map(({ label, href, Icon, hoverColor }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{ "--hover-color": hoverColor }}
              className="text-[#B8B9B6] transition-all duration-300 hover:scale-110 hover:text-[var(--hover-color)]"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Copyright notice */}
        <p className="mt-4 text-sm text-[#888888]">
          © {year} Cesar Bolívar
        </p>
      </div>
    </footer>
  );
}