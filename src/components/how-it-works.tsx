"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, CreditCard, Pill, ShoppingBag } from "lucide-react";

const HowItWorks = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <UserCheck className="h-10 w-10 text-emerald-600" />,
      title: "Register & Verify",
      description:
        "Register with your national ID and complete the verification process to confirm eligibility.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-emerald-600" />,
      title: "Get Digital Health Card",
      description:
        "Receive your secure digital health card with a unique QR code linked to your identity.",
    },
    {
      icon: <ShoppingBag className="h-10 w-10 text-emerald-600" />,
      title: "Visit Any Gov Pharmacy",
      description:
        "Go to any government pharmacy location with your digital health card.",
    },
    {
      icon: <Pill className="h-10 w-10 text-emerald-600" />,
      title: "Purchase Medicines",
      description:
        "Scan your card, verify your identity, and purchase medicines at subsidized rates.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Our simple 4-step process ensures that affordable medicines reach
          those who need them most.
        </p>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-4 rounded-full mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default HowItWorks;
