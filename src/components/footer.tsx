import { Pill } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pill className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold text-black">GovPharm</span>
            </div>
            <p className="text-black">
              A government initiative to provide affordable medicines to those
              in need.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline hover:text-teal-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:underline hover:text-teal-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:underline hover:text-teal-500"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:underline hover:text-teal-500"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:underline hover:text-teal-500"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline hover:text-teal-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="hover:underline hover:text-teal-500"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-black">Email: support@govpharm.gov</li>
              <li className="text-black">Phone: 16247</li>
              <li className="text-black">Address: Ministry of Health, Dhaka</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-black">
          <p>
            © {new Date().getFullYear()} Government Pharmacy Initiative. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
