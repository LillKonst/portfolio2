import hortenImg from "../../../images/hort1-skjermbilde.png";

export default function HortenCard() {
  return (
    <div className="w-full h-full rounded-lg bg-customBlue-dark flex gap-6 transition-transform duration-300 ease-out hover:scale-105">
      <div className="p-4 w-1/2">
        <div className="rounded-lg w-full aspect-w-5 aspect-h-3 ">
          <img
            src={hortenImg}
            alt="a screenshot of the Hort1.no website"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <h4 className="text-customWhite p-2 px-5 text-2xl">Hort1.no</h4>
        <p className="text-customWhite px-5 py-1 flex-grow">
          A website made for Hort1.no AS. It features information about an
          electric bike for sale, a pop-up shop and contact information /
          contact form.
        </p>
        <p className="text-customWhite px-5 pb-1 flex-grow">
          Built with React and Typescript. Styled using Tailwind. The website is
          linked to a domain name and the forms are sent to the business owners
          email.
        </p>
        <div className="flex gap-4 p-3 mt-auto">
          <a
            href="https://github.com/LillKonst/hort1-greenline"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
          >
            GITHUB
          </a>
          <a
            href="https://hort1.no"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
          >
            WEBSITE
          </a>
        </div>
      </div>
    </div>
  );
}
