import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import html from "../../images/w3_html5-icon.svg";
import css from "../../images/w3_css-icon~old.svg";
import js from "../../images/javascript-icon.svg";
import react from "../../images/reactjs-icon.svg";
import bootstrap from "../../images/getbootstrap-icon.svg";
import tailwind from "../../images/tailwindcss-icon.svg";
import figma from "../../images/figma-icon.svg";

export default function Resume() {
  return (
    <div className="-mt-1 w-full bg-customWhite flex flex-col items-center">
      <div className="w-9/12 my-12 py-12 text-customBlack flex flex-col">
        <div className="w-full border-b-2 border-customBlue">
          <h2 className="text-6xl">RESUME</h2>
        </div>
        <h3 className="text-md">
          An extract from my work experience. Download PDF for full CV.
        </h3>
        <div className="flex ms-auto -mt-5">
          <img src={github} alt="The GitHub Logo" className="p-2 w-14" />
          <img src={linkedin} alt="The LinkedIn Logo" className="p-2 w-14" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">EDUCATION</h3>
          <div>
            <p>2010-2013 - Greveskogen VGS - Dance Program</p>
            <p>2013-201g - Bårdar Akademiet - Dance Program</p>
            <p>2023-2024 - Noroff University - Frontend Development</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">SKILLS</h3>
          <div className="flex gap-2">
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img src={html} alt="The html Logo" className="p-2 w-14" /> HTML
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img src={css} alt="The CSS Logo" className="p-2 w-14" /> CSS
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img src={js} alt="The JavaScript Logo" className="p-2 w-14" /> JS
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img src={react} alt="The REACT Logo" className="p-2 w-14" />{" "}
              REACT
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img
                src={bootstrap}
                alt="The Bootstrap Logo"
                className="p-2 w-14"
              />
              Bootstrap
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img
                src={tailwind}
                alt="The Tailwind Logo"
                className="p-2 w-14"
              />
              Tailwind
            </div>
            <div className="border-2 border-customBlack rounded-lg w-fit flex flex-col items-center p-2 text-sm">
              <img src={figma} alt="The Figma Logo" className="p-2 w-14" />{" "}
              Figma
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">WORK EXPERIENCE</h3>
          <div>
            <p>Work Experience will come here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
