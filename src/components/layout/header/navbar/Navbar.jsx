// export default function Navbar() {
//   return (
//     <nav className="md:ms-auto pe-12 md:p-0">
//       <ul className="flex flex-col md:flex-row gap-4 text-customWhite text-lg xxs:text-2xl md:text-xl px-3 xxs:px-10 md:px-4">
//         <li>ARCHIVE</li>
//         <li>ABOUT</li>
//         <li>RESUME</li>
//         <li>CONTACT</li>
//       </ul>
//     </nav>
//   );
// }

export default function Navbar() {
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

  return (
    <nav className="md:ms-auto pe-12 md:p-0">
      <ul className="flex flex-col md:flex-row gap-4 text-customWhite text-lg xxs:text-2xl md:text-xl px-3 xxs:px-10 md:px-4">
        <li>
          <button
            onClick={() => scrollToSection("archive")}
            className="hover:font-semibold"
          >
            ARCHIVE
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:font-semibolde"
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("resume")}
            className="hover:font-semibolde"
          >
            RESUME
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:font-semibold"
          >
            CONTACT
          </button>
        </li>
      </ul>
    </nav>
  );
}
