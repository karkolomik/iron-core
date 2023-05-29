import React from "react";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

function Gallery() {
  return (
    <section className="">
      <div className="login-banner relative justify-center flex">
        <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
          Our Gallery
        </h1>
      </div>
      <div className="container page-padding py-[10rem]">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

export default Gallery;