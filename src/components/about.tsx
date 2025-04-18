"use client";
import Image from "next/image";
import about from "../assests/about.jpg";
import Counter from "./counter";

const About = () => {
  return (
    <section className="w-full bg-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
      {/* Left - Image and Badge */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src={about}
          alt="Pharmacist"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          width={100}
          height={100}
        />
        <div className="absolute top-4 left-4 bg-white shadow-2xl rounded-full p-6 text-center">
          <Counter end={25} label="Years Experience" />
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-teal-600 font-semibold mb-2">ABOUT US</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          We Are Professional <br />
          Pharmacy & Medical <br />
          Service
        </h2>
        <p className="text-gray-600 mb-4">
          Curabitur sodales magnis ex dictumst congue at nisi. Nostra sem
          parturient a elit euismod sociosqu finibus imperdiet. Auctor nisi
          porttitor quisque etiam posuere aptent.
        </p>
        <p className="text-gray-600 mb-6">
          Curabitur sodales magnis ex dictumst congue at nisi. Nostra sem
          parturient a elit euismod sociosqu finibus imperdiet. Auctor nisi
          porttitor quisque etiam posuere aptent.
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

export default About;
