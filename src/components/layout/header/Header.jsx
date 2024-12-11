import logo from "../../../images/logo.svg";
import Navbar from "./navbar/Navbar";

export default function Header() {
  return (
    <div className="fixed top-0 z-50 w-full h-[70px] flex px-12 py-5">
      <img
        src={logo}
        alt="Logo"
        className="h-[55px] ms-12  bg-customBlack/50 p-2"
      />
      <Navbar />
    </div>
  );
}
