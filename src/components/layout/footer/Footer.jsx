import logo from "../../../images/logo.svg";

export default function Footer() {
  return (
    <div className="w-full h-{80px] flex flex-col gap-4 justify-center items-center my-10 text-customWhite">
      <img src={logo} alt="Logo" className="h-[40px]" />
      <h4>© Lill-Kristine Konst</h4>
    </div>
  );
}
