"use client";

import Image from "next/image";

const logos = [
  { src: "/West-Bengal-300x300.png", alt: "West Bengal Govt" },
  { src: "/WBSEDCL.webp", alt: "WBSEDCL" },
  { src: "/egra.png", alt: "Egra" },
  {
    src: "/national-health-mission-logo-56CB075B4D-seeklogo.com.png",
    alt: "National Health Mission",
  },
  { src: "/balmerol.png", alt: "Balmerol" },
  { src: "/bon.png", alt: "BON" },
];

export default function LogoMarquee() {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="clients-marquee" aria-label="Notable clients">
      <div className="clients-track">
        {repeatedLogos.map((logo, i) => (
          <span className="client-logo-frame" key={`${logo.alt}-${i}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={160}
              height={64}
              className="client-logo"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
