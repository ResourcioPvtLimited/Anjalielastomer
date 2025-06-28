import React from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  return (
    <main className="bg-bgcolour max-w-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <FeaturedProducts />
      <Footer />
    </main>
  );
};

export default App;
