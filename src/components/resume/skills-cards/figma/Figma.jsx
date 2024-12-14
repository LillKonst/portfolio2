import figma from "../../../../images/figma-icon.svg";

export default function Figma() {
  return (
    <div className="border-2 border-customWhite rounded-lg w-full flex flex-col items-center p-2 text-sm">
      <img src={figma} alt="The Figma Logo" className="p-2 w-14" /> Figma
    </div>
  );
}
