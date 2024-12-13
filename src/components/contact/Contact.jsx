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
      <h3 className="text-md">My contact info</h3>

      <div className="max-w-[600px] mt-12 flex flex-col justify-self-center text-center gap-4 my-10 bg-customBlue-dark p-10 rounded-2xl">
        <h4 className=" mb-10 text-xl">I would love to hear from you!</h4>
        <p className="text-lg">
          If you find my projects interessting and/or would like more
          information about my services, I can be reached by email and will
          normally respond within 24hours.{" "}
        </p>

        <p>
          Email:
          <span className="text-red-500"> konstlillkristine@gmail.com</span>
        </p>

        <p className="text-xl">Looking forward to hear from you! </p>
        <p>Lill-Kristine Konst</p>
      </div>
    </div>
  );
}
