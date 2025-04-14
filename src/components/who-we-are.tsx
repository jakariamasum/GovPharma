"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import who from "../assests/who.jpg";
import Counter from "./counter";

const WhoWeAre = () => {
  return (
    <div className="py-16 px-4 md:px-10 lg:px-20 relative bg-transparent">
      <section className="px-6 md:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Left content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-teal-500 text-sm font-semibold uppercase tracking-wide">
              WHO WE ARE
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6 text-slate-800 leading-tight">
              With us, expect more than just a pharmacy.
            </h2>
            <p className="text-gray-500 mb-8 max-w-xl leading-relaxed">
              Erat litora dignissim consectetur sit mollis. Placerat gravida
              dolor integer mollis habitant felis consectetur lorem platea ac
              hendrerit. Vitae platea massa consectetuer tristique vivamus
              vulputate suspendisse blandit.
            </p>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={who}
              alt="Pharmacists discussing medication"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.div
        className="bg-white rounded-xl shadow-2xl p-8 flex justify-between w-[50%] md:absolute md:bottom-24 md:left-36"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Counter end={14} label="Happy Customer" />
        <Counter end={27} label="Product Sold" />
        <Counter end={15} label="Years Experience" />
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
