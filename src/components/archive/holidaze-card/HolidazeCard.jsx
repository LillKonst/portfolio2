import holidazeImg from "../../../images/holidaze-screenshot.png";

export default function HolidazeCard() {
  return (
    <div className="w-full rounded-lg bg-customWhite m-2">
      <div className="w-full h-2/6 rounded-lg">
        <img
          src={holidazeImg}
          alt="holidaze img"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h4 className="text-customBlack p-2 text-center font-semibold">
        HOLIDAZE
      </h4>
      <p className="text-customBlack px-5 py-1">
        Holidaze is a website where you can book venues for your next vacation
        or upload and manage your own. The project features a homepage, explore
        page, profile page, register/update venue page. There is also modals for
        registraion, login and edit profile. It connects with an API and fetches
        users and venues.{" "}
      </p>
    </div>
  );
}
