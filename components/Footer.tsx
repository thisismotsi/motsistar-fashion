"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-ivory pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand + Mission */}
        <div>
          <h2 className="text-xl font-heading font-semibold mb-3 text-gold">
            MOTSISTAR
          </h2>
          <p className="text-sm text-beige leading-relaxed font-normal">
            Empowering businesses and consumers with trusted insights, authentic
            products, and elite affiliate partnerships. Your success is our
            mission.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-6">
          <div>
            <h3 className="text-base font-semibold mb-2 text-gold">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2 text-gold">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="hover:text-gold transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact / Affiliate note */}
        <div className="text-sm">
          <h3 className="text-base font-semibold mb-2 text-gold">Get in Touch</h3>
          <p className="text-beige">Email: <a href="mailto:info@motsistar.com" className="hover:text-gold transition-colors">info@motsistar.com</a></p>
          <p className="mt-4 text-beige italic font-light">
            As an affiliate partner, we may earn from qualifying purchases.
            Transparency and trust are at the heart of everything we do.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gold/40 pt-4 text-center text-xs text-beige/70">
        &copy; {new Date().getFullYear()} MOTSISTAR. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
