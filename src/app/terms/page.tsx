import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sarkar Press",
  description: "Terms and Conditions for Sarkar Press printing services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <h1 className="page-hero-title">Terms &amp; Conditions</h1>
        <p className="page-hero-subtitle">
          Please read these terms carefully before placing an order.
        </p>
      </section>

      <section className="section">
        <div className="container">
          <div className="terms-body">
            <p className="terms-updated">Last updated: March 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By placing an order with Sarkar Press (hereinafter &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;), whether in person, by phone,
              or through this website, you agree to be bound by these Terms and
              Conditions. If you do not agree, please do not proceed with your
              order.
            </p>

            <h2>2. Our Services</h2>
            <p>
              Sarkar Press provides offset printing, digital printing, flex
              printing, graphic design, binding, packaging printing, and related
              services from our facility in Patashpur, Purba Medinipur, West
              Bengal. Service availability and pricing are subject to change
              without prior notice.
            </p>

            <h2>3. Order Placement</h2>
            <ul>
              <li>
                All orders must include a valid contact number and a clear
                description of requirements (type, quantity, size, finish).
              </li>
              <li>
                An Order ID is auto-generated for every online order. Please
                retain it for all future correspondence.
              </li>
              <li>
                We reserve the right to decline any order that violates
                applicable law, contains offensive content, or infringes on
                third-party intellectual property.
              </li>
              <li>
                Orders are confirmed only after we have verified requirements
                and, where applicable, received advance payment.
              </li>
            </ul>

            <h2>4. Pricing and Payment</h2>
            <ul>
              <li>
                All prices are quoted in Indian Rupees (INR) and are inclusive
                of applicable taxes unless stated otherwise.
              </li>
              <li>
                Payment is accepted via UPI, bank transfer, or cash at our
                office. Contact us through the{" "}
                <Link href="/#enquiry">enquiry form</Link> for current details.
              </li>
              <li>
                For custom or large-volume orders, an advance payment of up to
                50% may be required before production begins.
              </li>
              <li>Final balances are due on or before delivery/collection.</li>
            </ul>

            <h2>5. Turnaround and Delivery</h2>
            <ul>
              <li>
                Estimated turnaround times are provided in good faith but are
                not guaranteed. Delays caused by power outages, machine
                maintenance, supply issues, or force majeure events are not our
                liability.
              </li>
              <li>
                Delivery, if arranged, is at the client&apos;s risk and cost
                unless otherwise agreed in writing.
              </li>
            </ul>

            <h2>6. Cancellations and Modifications</h2>
            <ul>
              <li>
                Orders may be cancelled or modified before production begins.
                Contact us as soon as possible at{" "}
                <a href="tel:+919679091725">+91 96790 91725</a>.
              </li>
              <li>
                Once production has started, cancellations are not accepted and
                full payment remains due.
              </li>
              <li>
                Any costs already incurred (materials, setup, design) will be
                charged even if the order is cancelled prior to completion.
              </li>
            </ul>

            <h2>7. Client-Supplied Artwork</h2>
            <ul>
              <li>
                You are solely responsible for the accuracy of any text, images,
                or design files you provide.
              </li>
              <li>
                By submitting artwork, you confirm that you hold all necessary
                rights and licences and that the content does not infringe any
                third-party rights.
              </li>
              <li>
                We are not liable for errors in client-supplied files, including
                spelling mistakes, colour variations between screen and print,
                or low-resolution images.
              </li>
            </ul>

            <h2>8. Quality and Complaints</h2>
            <ul>
              <li>
                We strive for the highest print quality. If you believe your
                order is defective due to our error, please notify us within 48
                hours of collection/delivery with photographic evidence.
              </li>
              <li>
                Approved reprints or partial refunds may be offered at our
                discretion. We do not offer cash refunds for print jobs that
                meet the agreed specification.
              </li>
            </ul>

            <h2>9. Intellectual Property</h2>
            <p>
              All designs, templates, and creative work produced by Sarkar Press
              remain our intellectual property unless explicitly transferred in
              writing. You may not reproduce or resell our original designs
              without written permission.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Sarkar Press shall not be
              liable for any indirect, incidental, or consequential loss arising
              from the use of our services. Our total liability for any claim
              shall not exceed the amount paid for the specific order in
              question.
            </p>

            <h2>11. Privacy</h2>
            <p>
              We collect your name, phone number, and order details solely to
              process and fulfil your order. We do not sell or share your
              personal data with third parties. By placing an order, you consent
              to this use.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts of Purba
              Medinipur, West Bengal.
            </p>

            <h2>13. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. The
              current version is always available on this page. Continued use of
              our services after any change constitutes acceptance of the
              revised Terms.
            </p>

            <h2>14. Contact Us</h2>
            <p>For any questions regarding these Terms, please contact us:</p>
            <ul>
              <li>
                Phone: <a href="tel:+919679091725">+91 96790 91725</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:sarkarpress.20@gmail.com">
                  sarkarpress.20@gmail.com
                </a>
              </li>
              <li>Address: Patashpur, Purba Medinipur, West Bengal 721439</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
