import HolidazeCard from "../holidaze-card/HolidazeCard";
import holidazeImg from "../../../images/holidaze-screenshot.png";
import essentialsImg from "../../../images/essentials-screenshot.png";
import biddingsImg from "../../../images/biddings-screenshot.png";
import EssentailsCard from "../essentials-card/EssentialsCard";
import BiddingsCard from "../biddings-card/BiddingsCard";
import { useState } from "react";

export default function Carousel() {
  const [selectedCard, setSelectedCard] = useState("holidaze");

  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-12">
      <div className="w-full col-span-6 row-span-1 lg:col-span-2 lg:row-span-3 gap-4 lg:me-10">
        <div className="w-full flex lg:flex-col">
          <button
            onClick={() => setSelectedCard("holidaze")}
            className="w-full aspect-w-5 aspect-h-3 m-2"
          >
            <img
              src={holidazeImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover cursor-pointer rounded"
            />
          </button>

          <button
            onClick={() => setSelectedCard("essentials")}
            className="w-full aspect-w-5 aspect-h-3 m-2"
          >
            <img
              src={essentialsImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover cursor-pointer rounded"
            />
          </button>

          <button
            onClick={() => setSelectedCard("biddings")}
            className="w-full aspect-w-5 aspect-h-3 m-2"
          >
            <img
              src={biddingsImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover cursor-pointer rounded"
            />
          </button>
        </div>
      </div>

      <div className=" col-span-6 row-span-2 lg:col-span-4 lg:row-span-3 mx-2">
        {selectedCard === "holidaze" && <HolidazeCard />}
        {selectedCard === "essentials" && <EssentailsCard />}
        {selectedCard === "biddings" && <BiddingsCard />}
      </div>
    </div>
  );
}
