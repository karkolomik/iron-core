import About from "../components/About/About";
import React from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Trainers from "../components/Trainers/Trainers";
import FeedBackList from "../components/FeedBack/FeedBackList";
import Gallery from "../components/Gallery/Gallery";
import BMI from "../components/BMI/BMI";
import Pricing from "../components/Pricing/Pricing";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <FeedBackList />
      <Gallery />
      <BMI />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;
