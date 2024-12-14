import CardCollection from "./cardCollection/CardCollection";

export default function Archive() {
  return (
    <div className="w-11/12 sm:w-10/12 md:w-9/12 my-12 py-12 text-customWhite">
      <div className="w-full border-b-2 border-customBlue">
        <h2 className="text-6xl">ARCHIVE</h2>
      </div>
      <h3 className="text-md">This is some of my recent projects</h3>

      <div className="w-full flex justify-center my-10">
        <CardCollection />
      </div>
    </div>
  );
}
