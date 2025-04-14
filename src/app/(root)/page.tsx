import About from "@/components/about";
import Discover from "@/components/discover";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatWeOffer from "@/components/offer";
import Services from "@/components/services";
import WhoWeAre from "@/components/who-we-are";
import WhyChooseUs from "@/components/why-choose-us";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <WhoWeAre />
      <Discover />
      <Services />
      <WhatWeOffer />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};
export default Home;
