import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-11/12 sm:w-10/12 md:w-9/12 mt-12 pt-6 text-customWhite h-screen "
      data-aos="slide-up"
    >
      <div className="w-full border-b-2 border-customBlue">
        <h2 className="text-6xl">CONTACT</h2>
      </div>
      <h3 className="text-md">My contact info</h3>

      <div className="max-w-[600px] mt-12 flex flex-col justify-self-center text-center gap-4 my-10 bg-customBlue-dark p-10 rounded-2xl">
        <p className="my-5 text-2xl">I would love to hear from you!</p>{" "}
        <p className="text-lg">
          If you find my projects interessting and/or would like more
          information about my services:
        </p>
        <p>
          Send me an email at:
          <span className="text-red-600"> konstlillkristine@gmail.com</span>
        </p>
        <p>Lill-Kristine Konst</p>
      </div>
    </div>
  );
}
