"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import AnimatedStat from "@/components/AnimatedStat";
import LogoMarquee from "@/components/LogoMarquee";
import { useTranslation } from "@/context/TranslationContext";

const WHATSAPP_NUMBER = "919679091725";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function SectionIntro({
  eyebrow,
  title,
  body,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--accent)]">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-black leading-[0.98] tracking-[-0.03em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {body && <p className="mt-6 text-base leading-8 text-[color:var(--muted)] sm:text-lg">{body}</p>}
    </motion.div>
  );
}

function ServicesSection() {
  const { t } = useTranslation();
  
  const services = useMemo(() => [
    { title: t("service_title_1"), description: t("service_desc_1") },
    { title: t("service_title_2"), description: t("service_desc_2") },
    { title: t("service_title_3"), description: t("service_desc_3") },
    { title: t("service_title_4"), description: t("service_desc_4") },
    { title: t("service_title_5"), description: t("service_desc_5") },
    { title: t("service_title_6"), description: t("service_desc_6") },
    { title: t("service_title_7"), description: t("service_desc_7") },
    { title: t("service_title_8"), description: t("service_desc_8") },
    { title: t("service_title_9"), description: t("service_desc_9") },
    { title: t("service_title_10"), description: t("service_desc_10") },
  ], [t]);

  return (
    <section id="services" className="services-section">
      <div className="noise-overlay" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="services-heading">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[color:var(--accent)]">{t("services_eyebrow")}</p>
          <h2 className="text-balance text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[color:var(--text)] sm:text-5xl lg:text-6xl">
            {t("services_heading")}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
            {t("services_desc")}
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={index}
              className="service-card group"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: (index % 2) * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="service-divider" />
              <h3 className="text-balance text-2xl font-black tracking-[-0.03em] text-[color:var(--text)] sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="services-client-transition">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--line)] to-[color:var(--soft)]" />
          <span>{t("notable_clients")}</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[color:var(--line)] to-[color:var(--soft)]" />
        </div>
        <LogoMarquee />
      </div>
    </section>
  );
}

function LoadingIntro() {
  const [visible, setVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
        >
          <motion.div
            className="relative h-24 w-24 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -right-1 top-8 h-4 w-4 rounded-full bg-[color:var(--accent)] shadow-[0_0_34px_var(--accent-glow)]" />
          </motion.div>
          <motion.p
            className="absolute mt-36 text-xs font-bold uppercase tracking-[0.36em] text-white/55"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("loading_text")}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function EnquiryForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", requirement: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.name.trim()) nextErrors.name = t("form_name_req");
    if (!isValidEmail(form.email)) nextErrors.email = t("form_email_req");
    if (form.phone.replace(/\D/g, "").length < 10) nextErrors.phone = t("form_phone_req");
    if (form.requirement.trim().length < 8) nextErrors.requirement = t("form_req_req");
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    const message = `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim()}\nRequirement: ${form.requirement.trim()}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.setTimeout(() => {
      setStatus("success");
      window.location.href = url;
    }, 650);
  };

  const fieldClass =
    "w-full rounded-2xl border border-[color:var(--line)] bg-[color:var(--field)] px-5 py-4 text-sm text-[color:var(--text)] outline-none transition placeholder:text-[color:var(--muted)] focus:border-[color:var(--accent)] focus:ring-4 focus:ring-[color:var(--accent-soft)]";

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-[color:var(--line)] bg-[color:var(--glass)] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-8"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
      <div className="relative grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--muted)]">{t("form_name")}</span>
            <input className={fieldClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <span className="text-xs text-[color:var(--accent)]">{errors.name}</span>}
          </label>
          <label className="grid gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--muted)]">{t("form_email")}</span>
            <input
              type="email"
              className={fieldClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <span className="text-xs text-[color:var(--accent)]">{errors.email}</span>}
          </label>
        </div>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--muted)]">{t("form_phone")}</span>
          <input
            type="tel"
            className={fieldClass}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <span className="text-xs text-[color:var(--accent)]">{errors.phone}</span>}
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {t("form_req")}
          </span>
          <textarea
            className={`${fieldClass} min-h-36 resize-y`}
            value={form.requirement}
            onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          />
          {errors.requirement && <span className="text-xs text-[color:var(--accent)]">{errors.requirement}</span>}
        </label>
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full bg-[color:var(--accent)] px-8 text-sm font-black uppercase tracking-[0.18em] text-white shadow-[0_0_42px_var(--accent-glow)] transition hover:-translate-y-0.5 hover:bg-[color:var(--accent-strong)] disabled:cursor-wait disabled:opacity-80"
        >
          <span className="transition group-hover:scale-105">
            {status === "loading" ? t("form_prep") : status === "success" ? t("form_open") : t("form_send")}
          </span>
        </button>
      </div>
    </motion.form>
  );
}

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 140]);
  const heroOpacity = useTransform(scrollY, [0, 620], [1, 0.25]);
  const { t } = useTranslation();

  const testimonials = useMemo(() => [
    { quote: t("test_quote_1"), name: t("test_name_1"), role: t("test_role_1") },
    { quote: t("test_quote_2"), name: t("test_name_2"), role: t("test_role_2") },
    { quote: t("test_quote_3"), name: t("test_name_3"), role: t("test_role_3") },
    { quote: t("test_quote_4"), name: t("test_name_4"), role: t("test_role_4") },
  ], [t]);
  
  const duplicatedTestimonials = useMemo(() => [...testimonials, ...testimonials], [testimonials]);

  return (
    <>
      <LoadingIntro />
      <section id="home" className="hero-section relative min-h-screen overflow-hidden">
        <div className="noise-overlay" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <div className="hero-wave hero-wave-one" />
          <div className="hero-wave hero-wave-two" />
          <div className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 pb-24 pt-32 text-center">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="hero-badge mb-7 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] backdrop-blur-xl"
          >
            {t("hero_badge")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-main-title max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]"
          >
            {t("hero_title_new")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.75 }}
            className="hero-main-copy mt-8 max-w-2xl text-balance text-lg leading-8 sm:text-xl"
          >
            {t("hero_desc_new")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.65 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="#enquiry" className="premium-button bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent-strong)]">
              {t("hero_quote_btn")}
            </Link>
            <Link href="#services" className="premium-button secondary-button">
              {t("hero_services_btn")}
            </Link>
          </motion.div>
        </div>

        <motion.a
          href="#services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
              className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[color:var(--hero-muted)]"
        >
          {t("scroll")}
          <span className="h-12 w-px overflow-hidden bg-[color:var(--line)]">
            <motion.span
                className="block h-5 w-px bg-[color:var(--accent)]"
              animate={{ y: [-20, 48] }}
              transition={{ duration: 1.45, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.a>
      </section>

      <ServicesSection />

      <section id="about" className="section-shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--line)] bg-[color:var(--soft)]">
            <Image
              src="/PRINTING_MACHINES.webp"
              alt="Modern printing machinery at Sarkar Press"
              width={900}
              height={720}
              className="aspect-[4/5] w-full object-cover"
              priority={false}
            />
          </div>
        </motion.div>
        <div>
          <SectionIntro
            align="left"
            eyebrow={t("about_eyebrow")}
            title={t("about_heading")}
            body={t("about_text")}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <AnimatedStat target={9999} suffix="+" label={t("stat_projects")} duration={1700} />
            <AnimatedStat target={50} suffix="+" label={t("stat_years")} duration={1500} />
            <AnimatedStat target={3000} suffix="+" label={t("stat_clients")} duration={1800} />
          </div>
        </div>
      </section>

      <section id="enquiry" className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionIntro
          align="left"
          eyebrow={t("enquiry_eyebrow")}
          title={t("enquiry_title")}
          body={t("enquiry_desc")}
        />
        <EnquiryForm />
      </section>

      <section className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <SectionIntro eyebrow={t("test_eyebrow")} title={t("test_heading")} />
        </div>
        <div className="mt-14 flex overflow-hidden">
          <motion.div
            className="flex min-w-max gap-5 px-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="w-[20rem] rounded-[28px] border border-[color:var(--line)] bg-[color:var(--glass)] p-6 backdrop-blur-xl sm:w-[26rem]">
                <p className="text-lg leading-8 text-[color:var(--text)]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-8 border-t border-[color:var(--line)] pt-5">
                  <p className="font-bold text-[color:var(--text)]">{testimonial.name}</p>
                  <p className="text-sm text-[color:var(--muted)]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 sm:pb-32">
        <div className="cta-panel relative mx-auto max-w-6xl overflow-hidden rounded-[36px] px-6 py-16 text-center sm:px-10 sm:py-24">
          <div className="noise-overlay" />
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:var(--accent-soft)] blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[color:var(--accent)]">{t("cta_eyebrow")}</p>
            <h2 className="text-balance text-4xl font-black leading-none tracking-[-0.03em] sm:text-6xl">
              {t("cta_heading")}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              {t("cta_text")}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="#enquiry" className="premium-button bg-[color:var(--accent)] text-white hover:bg-[color:var(--accent-strong)]">
                {t("form_send")}
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="premium-button secondary-button">
                {t("cta_whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
