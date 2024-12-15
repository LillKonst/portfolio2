import logo from "../../../images/logo.svg";

export default function Footer() {
  return (
    <div className="w-full h-{80px] flex flex-col gap-4 justify-center items-center my-10 text-customWhite">
      <img src={logo} alt="Logo" className="h-[40px]" />
      <h4 className="text-sm text-center md:text-md">
        ©2024 Lill-Kristine Konst. All rights reserved.
      </h4>
    </div>
  );
}
