import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <section>
      <div style={{}} className="headerImage">
        <main>
          <Navbar />
          <Hero />
        </main>
      </div>
      <About />
      <Contact />
    </section>
  );
};

export default Home;
