import HolidazeCard from "../holidaze-card/HolidazeCard";
import EssentailsCard from "../essentials-card/EssentialsCard";
import BiddingsCard from "../biddings-card/BiddingsCard";

export default function CardCollection() {
  return (
    <div className="grid grid-cols-6 gap-6">
      <HolidazeCard />
      <EssentailsCard />
      <BiddingsCard />
    </div>
  );
}
