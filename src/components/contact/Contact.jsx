import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="w-9/12 my-12 py-12 text-customWhite h-screen "
      data-aos="slide-up"
    >
      <div className="w-full border-b-2 border-customBlue">
        <h2 className="text-6xl">CONTACT</h2>
      </div>
      <h3 className="text-md">
        I’d love to hear from you! You are welcome to contact me either by phone
        or email.
      </h3>

      <div className="w-full flex flex-col items-center justify-center my-10">
        <p>Lill-Kristine Konst</p>
        <p>konstlillkristine@gmail.com</p>
      </div>
    </div>
  );
}
