"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Affordable Medicines for{" "}
              <span className="text-emerald-600">Everyone</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              A government initiative to provide essential medicines at
              subsidized prices, ensuring healthcare accessibility for all
              citizens through a secure digital platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Register for Health Card
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2"
                >
                  Learn How It Works <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-6 shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Digital Health Card System"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-emerald-100 p-2 rounded-full">
                  <svg
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-medium">Verified Digital Health Card</p>
              </div>
              <p className="text-sm text-gray-500">
                Secure, tamper-proof digital health cards ensure medicines reach
                only eligible citizens.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
