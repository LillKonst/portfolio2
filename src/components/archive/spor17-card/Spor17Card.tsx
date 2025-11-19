import spor17Img from "../../../images/imageSpor17.png";

export default function Spor17Card() {
  return (
    <div className="w-full h-full rounded-lg bg-customBlue-dark flex gap-6 transition-transform duration-300 ease-out hover:scale-105">
      <div className="p-4 w-1/2">
        <div className="rounded-lg w-full aspect-w-5 aspect-h-3 ">
          <img
            src={spor17Img}
            alt="a screenshot of the Hort1.no website"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <h4 className="text-customWhite p-2 px-5 text-2xl">Spor17.no</h4>
        <p className="text-customWhite px-5 py-1 flex-grow">
          A website for my online store www.spor17.no. It features 8 products, shopping cart and chekout, as well as information about the store and a contact form. 
        </p>
        <p className="text-customWhite px-5 pb-1 flex-grow">
          The frontend is built using React and Typescript, styled with Tailwind. Using Shopify as headless cms. To make sure payment is secure. The shopping cart redirects the customer to a secure Shopify checkout and redirects back after purchase is completed.
        </p>
        <div className="flex gap-4 p-3 mt-auto">
          <a
            href="https://github.com/LillKonst/spor17"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 text-center transition-transform duration-300 hover:scale-105"
          >
            GITHUB
          </a>
          <a
            href="https://spor17.no"
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
