import Archive from "../../components/archive/Archive";
import MainImage from "../../components/mainImg/MainImg";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MainImage />
      <Archive />
    </div>
  );
}
