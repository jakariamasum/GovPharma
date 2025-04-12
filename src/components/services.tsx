import Image from "next/image";
import doctorImg from "../assests/doctor.png";
const Services = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left Section */}
        <div>
          <h4 className="text-emerald-500 font-semibold text-sm uppercase mb-2">
            Our Services
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            GovPharm
          </h2>
          <p className="text-gray-600 mb-4">
            Enhance your quality of life with the Healminos project! Don&rsquo;t
            miss the chance to have access to innovative healthcare services
            that will help you achieve better well-being
          </p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit class
            molestie, rutrum eleifend suspendisse aenean bibendum vulputate
            libero taciti hendrerit condimentum
          </p>
          <button className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition">
            Discover More
          </button>
        </div>

        <div className="">
          <Image
            src={doctorImg}
            alt="Doctor"
            className="w-full h-auto max-w-xs lg:max-w-sm"
            priority
          />
        </div>
        <div className="">
          <div className="bg-[#F9F9F9] shadow-lg rounded-xl p-7 w-full max-w-sm h-auto shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Your health, your choice
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit class
              molestie
            </p>

            {[
              { label: "Monthly Active Users", value: 75 },
              { label: "User Ratings and Reviews", value: 68 },
              { label: "Most Used Services", value: 85 },
              { label: "User Satisfaction Rate", value: 100 },
            ].map(({ label, value }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{label}</span>
                  <span>{value}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                  <div
                    className="bg-emerald-500 h-2 rounded-full"
                    style={{ width: `${value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
