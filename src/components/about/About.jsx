import aboutImg from "../../images/about-img.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function About() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 10;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="about-section"
      className="w-full bg-customBlue-dark flex flex-col items-center shadow-inner border-t-4 border-customBlue-dark"
    >
      <div
        className="w-11/12 sm:w-10/12 md:w-9/12 mt-12 pt-6 text-customWhite"
        data-aos="slide-up"
      >
        <div className="w-full border-b-2 border-customBlue">
          <h2 className="text-6xl">ABOUT</h2>
        </div>
        <h3 className="text-md">She/her</h3>
        <div className="flex flex-col items-center mt-6" data-aos="slide-up">
          <div className="w-full flex flex-col gap-4">
            <p className="mb-4 xl:text-xl">
              <span className="font-semibold">Hi there!</span> My name is Lill,
              a frontend developer based in Oslo, Norway. I love transforming
              ideas into visually appealing, user-friendly, and functional
              applications. My goal is to contribute to shaping a more
              harmonious way of interacting with the ever-evolving web.
            </p>
            <p className="mb-4 xl:text-xl">
              Before diving into tech, I spent eight years as a professional
              dancer and dance teacher, a journey that taught me discipline,
              adaptability, and creative problem-solving. A decade in Oslo
              inspired a move to a tiny house on wheels, where living close to
              nature fuels my creativity and helps me maintain a healthy
              work-life balance.
            </p>
            <p className="mb-4 xl:text-xl">
              In December 2024, I graduated from a two-year frontend development
              program at Noroff Vocational School. I’m excited to bring my
              creativity and dedication to this new career path and make a
              meaningful impact in the tech world.
            </p>
            <div className="flex w-full gap-4 xs:gap-8 justify-between ">
              <button
                onClick={() => scrollToSection("archive")}
                className="w-full py-4 px-5 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
              >
                ARCHIVE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-4 px-5 flex justify-center items-center bg-customBlue text-customWhite rounded-md gap-2 shadow-lg transition-transform duration-300 ease-out hover:scale-105"
              >
                CONTACT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 1 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full flex mt-10" data-aos="slide-up">
            <img
              src={aboutImg}
              alt="Mirrored image of Lill-Kristine Konst"
              className="w-full h-full object-cover rounded shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
