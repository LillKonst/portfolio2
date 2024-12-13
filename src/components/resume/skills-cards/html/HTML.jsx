import html from "../../../../images/w3_html5-icon.svg";

export default function Html() {
  return (
    <div className="border-2 border-customBlack rounded-lg w-full flex flex-col items-center p-2 text-sm">
      <img src={html} alt="The html Logo" className="p-2 w-14" /> HTML
    </div>
  );
}
