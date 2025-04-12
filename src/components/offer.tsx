import Image from "next/image";
import { FC } from "react";
import medicine from "../assests/medicine.jpg";

const features = [
  {
    title: "Generic Medicine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: medicine,
    active: false,
  },
  {
    title: "Health Check",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: medicine,
    active: false,
  },
  {
    title: "Doctor Receipt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: medicine,
    active: true,
  },
  {
    title: "Pharmacy Store",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    icon: medicine,
    active: false,
  },
];

const WhatWeOffer: FC = () => {
  return (
    <section className="bg-[#f4f3f0] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-gray-300 text-sm text-gray-700">
          What We Offer
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Dedicated to Your{" "}
          <span className="text-green-600 italic">GovPharma</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 h-full ${
                feature.active
                  ? "bg-gradient-to-br from-green-800 to-green-600 text-white"
                  : "bg-white text-gray-900 shadow-sm"
              } transition-all duration-300`}
            >
              <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                className={`w-12 h-12 mb-4 ${
                  feature.active ? "invert brightness-0" : "text-green-600"
                }`}
                width={12}
                height={12}
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className={`inline-flex items-center text-sm font-medium ${
                  feature.active ? "text-white" : "text-green-700"
                }`}
              >
                Learn More
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
