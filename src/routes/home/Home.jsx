import Archive from "../../components/archive/Archive";
import MainImage from "../../components/mainImg/MainImg";
import About from "../../components/about/About";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center">
//       <MainImage />
//       <Archive />
//       <About />
//       <Resume />
//       <Contact />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MainImage />
      <div id="archive" className="w-full flex justify-center">
        <Archive />
      </div>
      <div id="about" className="w-full flex justify-center">
        <About />
      </div>
      <div id="resume" className="w-full flex justify-center">
        <Resume />
      </div>
      <div id="contact" className="w-full flex justify-center">
        <Contact />
      </div>
    </div>
  );
}
