import About from "../components/About/About";
import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Footer />
    </>
  );
}

export default Home;
