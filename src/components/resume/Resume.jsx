import github from "../../images/github-white.svg";
import linkedin from "../../images/linkedin-white.svg";
import CSS from "./skills-cards/css/CSS";
import JS from "./skills-cards/js/JS";
import React from "./skills-cards/react/React";
import Bootstrap from "./skills-cards/bootstrap/Bootstrap";
import Tailwind from "./skills-cards/tailwind/Tailwind";
import Figma from "./skills-cards/figma/Figma";
import SkillHTML from "./skills-cards/html/SkillHTML";
import { useState } from "react";

export default function Resume() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="-mt-1 w-full bg-customBlue-dark flex flex-col items-center">
      <div className="w-11/12 sm:w-10/12 md:w-9/12 my-12 py-12 text-customWhite flex flex-col">
        <div className="w-full border-b-2 border-customBlue">
          <h2 className="text-6xl">RESUME</h2>
        </div>
        <h3 className="text-md">An extract from my work experience</h3>
        <div className="flex ms-auto xs:-mt-5">
          <img src={github} alt="The GitHub Logo" className="p-2 w-14" />
          <img src={linkedin} alt="The LinkedIn Logo" className="p-2 w-14" />
        </div>
        <div className="mb-5">
          <h3 className="text-2xl font-semibold mb-3">EDUCATION</h3>
          <p>2010 - 2013 | Greveskogen VGS, Dance program</p>
          <p>2013 - 2016 | Bårdar Academy, Dance program</p>
          <p>2023 - 2024 | Noroff University, Frontend Development</p>
        </div>
        <div className="mb-5">
          <h3 className="text-2xl font-semibold mb-3">WORK EXPERIENCE</h3>
          {showMore ? (
            <div className="flex flex-col gap-6 md:gap-2 items-start">
              <p>
                <button
                  className=" text-red-600 cursor-pointer hover:underline"
                  onClick={() => setShowMore(false)}
                >
                  Back to general experience
                </button>
              </p>

              <p>
                2024 | Danser og koreograf «Layers», She X GentsHub at
                Scenehuset, SHE Heels Company
              </p>
              <p>2023 | Danser og koreograf, IDYLL Festivalen, Eventshow </p>
              <p>
                2021 - 2023 | Danser og koreograf, diverse eventer, Eventshow,
                SHE Heels Company
              </p>
              <p>2022 | Danser, Queen Bees, Musikkvideo, Anna-Lisa Kumoji</p>

              <p>
                2022 | Danser og koreograf «Layers», Oslo Jazzdans Festival, SHE
                Heels Company
              </p>
              <p>
                2021 | Danser, Kristiania Magiske Tivolitheater, Monster
                Scripted/NRK, koreografi: Sandra Gerecke
              </p>

              <p>
                2021 Danser, Beat Diabetes Aksjonen TV3, Miss Li «Starkare»,
                Koreograf: Henni Olsen
              </p>
              <p>
                2021 Danser og koreograf, konsert, Global Musikkfest Halden,
                Royane
              </p>

              <p>
                2016 | Danser for Robin og Bugge, Norges største after
                ski-konsert, Oslo Spektrum
              </p>
              <p>
                2015 | Danser, Swinging Christmas, Chat Noir, produsent Gusty
                Utterdahl og Tom Sterri
              </p>

              <p>
                2012 | Danser, Disco Divas and a Disco Duck, City Scene
                Fredrikstad, produsent Gusty Utterdahl
              </p>

              <p>
                2018 | Danser og koreograf, Div show og event jobber,
                Extravadanza/Divine, Unique Events
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6 md:gap-2 items-start">
              <p>
                2012 - Currently | Dancer, choreographer and danceteacher{" "}
                <button
                  className="ms-auto ps-5 text-red-600 cursor-pointer hover:underline"
                  onClick={() => setShowMore(true)}
                >
                  Read More
                </button>
              </p>
              <p>
                2023 - Currently | Butikkmedarbeider, Låseansvarlig ved Meny
                Skøyen
              </p>
              <p>2021-2022 | Smittesporer i Oslo Kommune</p>
              <p>2016-2019 | Butikkmedarbeider ved Vita Exclusive</p>
              <p>2017-2018 | BPA ved Hav AS</p>
              <p>2014-2016 | Cafe- og kioskmedarbeider ved Quickbar AS</p>
            </div>
          )}
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
