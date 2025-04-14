const Discover = () => {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/vxCryf8D/raimond-klavins-n-7-HTOi-JPso-unsplash.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center p-4 bg-[#03464E] rounded-lg opacity-70">
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
          Get the Healminos project <br /> now and start your journey <br />{" "}
          towards holistic well-being.
        </h1>
        <p className="text-white text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-teal-400 hover:bg-teal-500 text-white font-medium px-6 py-3 rounded-full transition">
          DISCOVER MORE
        </button>
      </div>
    </section>
  );
};

export default Discover;
