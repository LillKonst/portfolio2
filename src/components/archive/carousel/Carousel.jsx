import HolidazeCard from "../holidaze-card/HolidazeCard";
import holidazeImg from "../../../images/holidaze-screenshot.png";
import essentialsImg from "../../../images/essentials-screenshot.png";
import biddingsImg from "../../../images/biddings-screenshot.png";

export default function Carousel() {
  return (
    <div className="flex gap-8">
      <div>
        <ul className="flex flex-col gap-4 items-start">
          <li className="w-64 h-36">
            <img
              src={holidazeImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover m-2 cursor-pointer rounded"
            />
          </li>
          <li className="w-64 h-36">
            <img
              src={essentialsImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover m-2 cursor-pointer rounded"
            />
          </li>
          <li className="w-64 h-36">
            <img
              src={biddingsImg}
              alt="img of the holidaze homepage"
              className="w-full h-full object-cover m-2 cursor-pointer rounded"
            />
          </li>
        </ul>
      </div>
      <div>
        <HolidazeCard />
      </div>
    </div>
  );
}
