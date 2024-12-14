import essentialsImg from "../../../images/essentials-screenshot.png";

export default function EssentailsCard() {
  return (
    <div className="col-span-6 md:col-span-3 lg:col-span-2 w-full h-full rounded-lg bg-customBlue-dark flex flex-col transition-transform duration-300 ease-out hover:scale-105">
      <div className="p-4">
        <div className="rounded-lg w-full aspect-w-5 aspect-h-3 ">
          <img
            src={essentialsImg}
            alt="holidaze img"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <h4 className="text-customWhite p-2 px-5 text-2xl">ESSENTAILS</h4>
      <p className="text-customWhite px-5 py-1 flex-grow">
        JavaScript frameworks task where users may add products to shopping
        cart, search individual products and checkout cart. Built with React.
      </p>
      <div className="flex gap-4 p-3 mt-auto">
        <a
          href="https://github.com/LillKonst/js-frameworks-ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
        >
          GITHUB
        </a>
        <a
          href="https://essentials-ecom.netlify.app/"
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
