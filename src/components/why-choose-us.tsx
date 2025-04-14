import React from "react";
import choose from "../assests/choose.png";
import Image from "next/image";
import { HeadphonesIcon, Heart, Tag } from "lucide-react";
const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 px-6 md:px-20 py-16">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <p className="text-teal-600 text-sm font-semibold">WHY CHOOSE US</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
            Best services available for the best customers
          </h2>
          <Image
            src={choose || ""}
            alt="Support Illustration"
            width={500}
            height={300}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-teal-500">
                <Heart />{" "}
              </span>{" "}
              Honesty & transparency
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-teal-500">
                {" "}
                <Tag />{" "}
              </span>{" "}
              Extra Discount
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-teal-500">
                <HeadphonesIcon />{" "}
              </span>{" "}
              24/7 Premium Support
            </h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
