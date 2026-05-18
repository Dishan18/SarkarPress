"use client";

import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "919679091725";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#enquiry", label: "Enquiry" },
  { href: "/terms", label: "Terms" },
];

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#contact"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--soft)] text-[color:var(--muted)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer-shell" id="footer">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.05fr_0.65fr_1.15fr] lg:py-20">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white">
              <Image src="/Logofinal.png" alt="" fill sizes="48px" className="object-contain p-1" />
            </span>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[color:var(--text)]">Sarkar Press</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-[color:var(--muted)]">
            Commercial, custom, and large-format printing with a clean production process and premium finishing.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <SocialIcon label="Facebook">
              <span className="text-sm font-black">f</span>
            </SocialIcon>
            <SocialIcon label="Instagram">
              <span className="text-sm font-black">ig</span>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <span className="text-sm font-black">in</span>
            </SocialIcon>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.28em] text-[color:var(--faint)]">Quick links</h2>
          <nav className="mt-6 grid gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--accent)]">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.28em] text-[color:var(--faint)]">Contact</h2>
          <div className="mt-6 grid gap-3 text-sm leading-7 text-[color:var(--muted)]">
            <a href="tel:+919679091725" className="transition hover:text-[color:var(--accent)]">
              +91 96790 91725
            </a>
            <a href="mailto:sarkarpress.20@gmail.com" className="transition hover:text-[color:var(--accent)]">
              sarkarpress.20@gmail.com
            </a>
            <p>Patashpur, Purba Medinipur, West Bengal 721439</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="inline-flex min-h-11 items-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-[color:var(--accent-strong)]"
            >
              WhatsApp
            </a>
            <a
              href="tel:+919679091725"
              className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--line)] bg-[color:var(--soft)] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Call
            </a>
          </div>
          <div className="footer-map mt-8 overflow-hidden rounded-3xl border border-[color:var(--line)] bg-[color:var(--soft)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.826712199891!2d87.53751287601682!3d22.017949753068965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02d2ad505a827b%3A0xf9377693098c3565!2sSarkar%20Colour%20Offset!5e0!3m2!1sen!2sin!4v1715939433556!5m2!1sen!2sin"
              title="Sarkar Press location map"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)] px-5 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-xs text-[color:var(--faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Sarkar Press. All rights reserved.</span>
          <span>Modern printing solutions for ambitious brands.</span>
        </div>
      </div>
    </footer>
  );
}
