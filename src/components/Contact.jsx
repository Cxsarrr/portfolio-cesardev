import { useState } from "react";
// Icons for social media and contact methods
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiArrowRight, HiCheck } from "react-icons/hi";

// Contact data configuration
const contactInfo = {
  email: "cluisbolivarb@gmail.com",
  location: "Colombia",
  whatsapp: "https://wa.me/573003673646",
  linkedin: "https://linkedin.com/in/cesarbolivar",
  github: "https://github.com/Cxsarrr",
};

// Social media links configuration
const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: contactInfo.linkedin,
    Icon: FaLinkedin,
    hoverColor: "#0A66C2",
  },
  {
    id: "github",
    label: "GitHub",
    href: contactInfo.github,
    Icon: FaGithub,
    hoverColor: "#FFFFFF",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: contactInfo.whatsapp,
    Icon: FaWhatsapp,
    hoverColor: "#25D366",
  },
];

export default function Contact() {
  // State to manage the copy-to-clipboard UI feedback
  const [copied, setCopied] = useState(false);

  // Handles copying the email address to the user's clipboard
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section"
    >
      <div className="mx-auto w-full">
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Left Column: Message and CTA */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff8400] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#ff8400]" />
              </span>
              <p className="title-orange tracking-widest">
                DISPONIBLE PARA TRABAJAR
              </p>
            </div>

            <h2 id="contact-title" className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              ¿Hablamos sobre tu próximo <span className="text-[#ff8400]">proyecto</span>?
            </h2>
            
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#B8B9B6]">
              Estoy abierto a nuevas oportunidades, proyectos freelance o colaboraciones.
              Si tienes algo en mente, escríbeme y te responderé en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${contactInfo.email}`} className="button-black flex items-center justify-center gap-2 font-semibold">
                Enviar email
              </a>
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="button-white flex items-center justify-center gap-2 font-semibold"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Floating contact cards */}
          <div className="flex flex-col gap-4">
            
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="group flex w-full items-center gap-5 text-left rounded-2xl border border-[#2E2E2E] bg-[#1A1A1A] p-5 transition-all duration-300 hover:border-[#ff8400]/40 hover:bg-[#232323] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,132,0,0.1)]"
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                copied 
                  ? "bg-green-500/20 text-green-400" 
                  : "bg-[#ff8400]/15 text-[#ff8400] group-hover:bg-[#ff8400]/25 group-hover:scale-110"
              }`}>
                {copied ? <HiCheck size={24} /> : <MdEmail size={24} />}
              </span>
              <div>
                <p className="text-xs font-mono text-[#B8B9B6]">Email</p>
                <p className="text-base font-medium text-white">{contactInfo.email}</p>
              </div>
              <div className="ml-auto flex items-center">
                {copied ? (
                  <span className="text-xs font-medium text-green-400 animate-pulse">¡Copiado!</span>
                ) : (
                  <span className="text-xs font-medium text-[#ff8400] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Copiar
                  </span>
                )}
              </div>
            </button>

            <div className="flex items-center gap-5 rounded-2xl border border-[#2E2E2E] bg-[#1A1A1A] p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-white/60">
                <MdLocationOn size={24} />
              </span>
              <div>
                <p className="text-xs font-mono text-[#B8B9B6]">Ubicación</p>
                <p className="text-base font-medium text-white">{contactInfo.location}</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="rounded-2xl border border-[#2E2E2E] bg-[#1A1A1A] p-5">
              <p className="mb-4 text-xs font-mono text-[#B8B9B6]">Encuéntrame en</p>
              <div className="flex gap-4">
                {socialLinks.map(({ id, label, href, Icon, hoverColor }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    // Inline style to allow dynamic hover colors using CSS variables
                    style={{ "--hover-color": hoverColor }}
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#B8B9B6] transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-[var(--hover-color)] hover:-translate-y-1"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}