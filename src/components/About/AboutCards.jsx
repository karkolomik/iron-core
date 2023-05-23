import { cardList } from "./cardList";

import React from "react";

function AboutCards() {
  return (
    <>
      {cardList.map((card, id) => (
        <div
          key={id}
          className="drop-shadow-2xl flex flex-col cursor-pointer bg-white justufy-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2x1 min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
        >
          <img src={card.img} alt="img" className="w-[75px] mb-4 list-img" />
          <p className="text-[24px] font-bold uppercase mb-7 ">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full">
            {card.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default AboutCards;
