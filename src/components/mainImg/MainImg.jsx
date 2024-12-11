import MainImg from "../../images/main-image.jpg";

export default function MainImage() {
  return (
    <div className="bg-custom-Black w-full h-screen relative overflow-hidden">
      <img
        src={MainImg}
        alt="Main-Img"
        className="w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 z-10 w-full h-full bg-customBlack/20"></div>

      <div className="absolute top-0 left-0 w-full h-full z-15">
        <div className="w-full h-full bg-customBlack clip-triangle"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative">
          <h3 className="absolute -top-6 md:-top-8 left-1 xs:text-xl md:text-3xl lg:text-3xl tracking-wide text-customBlue">
            FRONTEND DEVELOPER
          </h3>
          <h1 className="xs:text-2xl md:text-5xl lg:text-6xl font-bold text-customGray">
            LILL-KRISTINE KONST
          </h1>
        </div>
      </div>
    </div>
  );
}
