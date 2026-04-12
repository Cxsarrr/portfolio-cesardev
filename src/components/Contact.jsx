export default function Contact() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="px-5 pb-12 sm:px-6 md:px-10">
            <div className="mx-auto w-full">
                <p className="title-orange">CONTACTO</p>
                <h2 id="contact-title" className="title-white text-5xl font-bold text-white">Contáctame · Buscando oportunidades</h2>

                <address className="not-italic mt-6 text-base leading-relaxed text-[#B8B9B6]">
                    <p>Aquí va el correo y las redes sociales.</p>
                    <ul className="mt-4 space-y-2">
                        <li>Correo: por definir</li>
                        <li>LinkedIn: por definir</li>
                    </ul>
                </address>
            </div>
        </section>
    );
}