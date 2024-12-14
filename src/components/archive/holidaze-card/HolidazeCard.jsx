import holidazeImg from "../../../images/holidaze-screenshot.png";

export default function HolidazeCard() {
  return (
    <div className="col-span-6 lg:col-span-2 w-full h-full rounded-lg bg-customBlue-dark flex flex-col transition-transform duration-300 ease-out hover:scale-105">
      <div className="p-4">
        <div className="rounded-lg w-full aspect-w-5 aspect-h-3 ">
          <img
            src={holidazeImg}
            alt="holidaze img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <h4 className="text-customWhite p-2 px-5 text-2xl">HOLIDAZE</h4>
      <p className="text-customWhite px-5 py-1 flex-grow">
        Venue booking site and final exam. Users may book, upload and manage
        venues. Built with React and Tailwind.
      </p>
      <div className="flex gap-4 p-3 mt-auto">
        <a
          href="https://github.com/LillKonst/project-exam"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
        >
          GITHUB
        </a>
        <a
          href="https://holidaze-exam-lillkonst.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
        >
          NETLIFY
        </a>
      </div>
    </div>
  );
}
