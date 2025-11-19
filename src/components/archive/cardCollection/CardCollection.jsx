import HolidazeCard from "../holidaze-card/HolidazeCard";
import EssentailsCard from "../essentials-card/EssentialsCard";
import BiddingsCard from "../biddings-card/BiddingsCard";
import HortenCard from "../horten-card/HortenCard";
import Spor17Card from "../spor17-card/Spor17Card";

export default function CardCollection() {
  return (
    <div className="flex flex-col w-full">
      <div>
        <h2 className="text-2xl my-5">Recent work</h2>
        <div className="w-full flex flex-col gap-5">
          <Spor17Card />
          <HortenCard />
        </div>
      </div>
      <div>
        <h2 className="text-2xl my-5">School projects</h2>
        <div className="grid grid-cols-6 gap-6">
          <HolidazeCard />
          <EssentailsCard />
          <BiddingsCard />
        </div>
      </div>
    </div>
  );
}
