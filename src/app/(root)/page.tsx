import About from "@/components/about";
import Discover from "@/components/discover";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WhatWeOffer from "@/components/offer";
import Services from "@/components/services";

const Home = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <About />
      <Discover />
      <Services />
      <WhatWeOffer />
      <Footer />
    </main>
  );
};
export default Home;
