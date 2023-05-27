import BgImage from "../../images/who-we-are/title-bg2.png";

import React from "react";

function Gallery() {
  return (
    <>
      <section id="gallery" className="relative min450:hidden">
        <div className="container page-padding py-[4rem] pt-0">
          <div className="flex flex-col text-center relative items-center">
            <h2 className="text-white relative z-10 text-[20px]  font-bold mb-12">
              IronCore Gallery
            </h2>
            <img
              src={BgImage}
              alt="bg"
              className="w-[26rem] absolute -top-[48px]"
            />
            <p className="text-[#646464] font-medium text-[18px] italic mt-6">
              Dive into a world of fitness possibilities and explore the range
              of classes designed to elevate your workout experience.
            </p>
          </div>

          <div className="gallery-grid py-24 w-full h-auto relative">
            <div id="item-0"></div>
            <div id="item-1"></div>
            <div id="item-2"></div>
            <div id="item-3"></div>
            <div id="item-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
