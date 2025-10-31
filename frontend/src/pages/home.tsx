import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/herosection";

const Home: React.FC = () => {
  const handleNavigation = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
