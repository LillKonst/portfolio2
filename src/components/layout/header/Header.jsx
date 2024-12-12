import logo from "../../../images/logo.svg";
import Navbar from "./navbar/Navbar";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 md:w-9/12 mx-auto z-50 h-[90px] px-3 xxs:px-6 py-5 bg-customBlack/70 md:bg-transparent">
      <div className="flex md:bg-customBlack/70 rounded-full md:p-3">
        <img src={logo} alt="Logo" className="h-[55px] p-2" />

        <button
          className=" ms-auto me-6 z-20 p-2 rounded-xl bg-customBlue/60 text-customWhite md:hidden"
          ref={buttonRef}
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden md:flex"
          } absolute md:static top-0 right-0 p-8  
                       rounded-tl-xl rounded-bl-xl
                     bg-customBlack/70 md:bg-transparent md:py-2 md:px-0 md:rounded-full md:space-x-4 md:ms-auto md:items-center`}
        >
          <Navbar />
        </div>
      </div>
    </div>
  );
}
