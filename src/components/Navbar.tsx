"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation, Lang } from "@/context/TranslationContext";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5" aria-hidden="true">
      <span className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
      <span className={`absolute left-0 top-2 h-px w-5 bg-current transition duration-300 ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`absolute left-0 top-4 h-px w-5 bg-current transition duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
    </span>
  );
}

function LanguageDropdown() {
  const { lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);

  const langs = [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "bn", label: "BN" },
  ] as const;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--soft)] px-3 text-xs font-black uppercase text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
        aria-label="Select Language"
      >
        {lang}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full z-50 mt-2 w-20 overflow-hidden rounded-[20px] border border-[color:var(--line)] bg-[color:var(--nav-bg)] p-1 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            >
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`block w-full rounded-xl px-4 py-2.5 text-center text-xs font-bold transition hover:bg-[color:var(--soft)] hover:text-[color:var(--accent)] ${
                    lang === l.code ? "bg-[color:var(--soft)] text-[color:var(--accent)]" : "text-[color:var(--muted)]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const links = [
    { href: "/#home", label: t("footer_home") },
    { href: "/#services", label: t("nav_services") },
    { href: "/#about", label: t("nav_about") },
    { href: "/#enquiry", label: t("nav_enquiry") },
    { href: "/#contact", label: t("nav_contact") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "border-[color:var(--line)] bg-[color:var(--nav-bg)] shadow-[0_18px_60px_rgba(0,0,0,0.14)] backdrop-blur-2xl"
            : "border-[color:var(--line)] bg-[color:var(--nav-idle-bg)] backdrop-blur-xl"
        }`}
      >
        <Link href="/#home" className="flex min-w-0 items-center gap-3" aria-label="Sarkar Press home" onClick={() => setOpen(false)}>
          <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[color:var(--line)] bg-white">
            <Image src="/Logofinal.png" alt="" fill sizes="40px" className="object-contain p-1" />
          </span>
          <span className="hidden sm:inline truncate text-sm font-black uppercase tracking-[0.18em] text-[color:var(--text)]">
            Sarkar Press
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[color:var(--muted)] transition hover:bg-[color:var(--soft)] hover:text-[color:var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageDropdown />
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--soft)] text-xs font-black text-[color:var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? "D" : "L"}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--soft)] text-[color:var(--text)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-3 grid max-w-6xl gap-1 rounded-[24px] border border-[color:var(--line)] bg-[color:var(--nav-bg)] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-[color:var(--text)] transition hover:bg-[color:var(--soft)] hover:text-[color:var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
