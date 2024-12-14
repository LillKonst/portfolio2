import bootstrap from "../../../../images/getbootstrap-icon.svg";

export default function Bootstrap() {
  return (
    <div className="border-2 border-customWhite rounded-lg w-full flex flex-col items-center p-2 text-sm">
      <img src={bootstrap} alt="The Bootstrap Logo" className="p-2 w-14" />
      Bootstrap
    </div>
  );
}
