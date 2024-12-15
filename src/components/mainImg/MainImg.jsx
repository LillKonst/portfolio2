import { useState, useEffect } from "react";
import MainImg from "../../images/main-image.jpg";

export default function MainImage() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-custom-Black w-full h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url(${MainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute inset-0 z-10 w-full h-full  bg-customBlack/50 sm:bg-customBlack/20"></div>

      <div className="absolute top-0 left-0 w-full h-full z-15">
        <div className="w-full h-full bg-customBlack clip-triangle"></div>
      </div>

      <div className="absolute top-10 ps-2 xs:ps-0 xxs:top-0 inset-0 flex items-center justify-start text-wrap xxs:text-nowrap xs:justify-center z-20">
        <div className="relative">
          <h3 className="absolute -top-6 md:-top-8 left-1 text-xl md:text-3xl lg:text-3xl tracking-wide text-customBlue">
            FRONTEND DEVELOPER
          </h3>
          <h1 className="text-3xl text-wrap md:text-5xl lg:text-6xl font-bold text-customGray">
            LILL-KRISTINE KONST
          </h1>
        </div>
      </div>
    </div>
  );
}
