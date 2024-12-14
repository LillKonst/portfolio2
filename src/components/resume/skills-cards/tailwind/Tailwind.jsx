import tailwind from "../../../../images/tailwindcss-icon.svg";

export default function Tailwind() {
  return (
    <div className="border-2 border-customWhite rounded-lg w-full flex flex-col items-center p-2 text-sm">
      <img src={tailwind} alt="The Tailwind Logo" className="p-2 w-14" />
      Tailwind
    </div>
  );
}
