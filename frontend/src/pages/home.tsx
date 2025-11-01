import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/herosection";
import PastQuestions from "../components/pastquestions";

const Home: React.FC = () => {
  const handleNavigation = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onNavigate={handleNavigation} />
      <main className="flex-1">
        {/* Hero / Landing Section */}
        <HeroSection />

        {/* Past Questions Section */}
        <section id="past-questions" className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <PastQuestions />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
