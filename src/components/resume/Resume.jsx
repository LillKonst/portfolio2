import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";
import CSS from "./skills-cards/css/CSS";
import JS from "./skills-cards/js/JS";
import React from "./skills-cards/react/React";
import Bootstrap from "./skills-cards/bootstrap/Bootstrap";
import Tailwind from "./skills-cards/tailwind/Tailwind";
import Figma from "./skills-cards/figma/Figma";
import SkillHTML from "./skills-cards/html/SkillHTML";

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
          <h3 className="text-2xl font-semibold mb-3">WORK EXPERIENCE</h3>
          <div>
            <p>Work Experience will come here</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">SKILLS</h3>
          <div className="grid grid-cols-2 xxs:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-9 gap-4">
            <SkillHTML />
            <CSS />
            <JS />
            <React />
            <Bootstrap />
            <Tailwind />
            <Figma />
          </div>
        </div>
      </div>
    </div>
  );
}
