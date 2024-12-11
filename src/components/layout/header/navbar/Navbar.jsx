export default function Navbar() {
  return (
    <nav className="md:ms-auto pe-12 md:p-0">
      <ul className="flex flex-col md:flex-row gap-4 text-customWhite text-lg xxs:text-2xl md:text-xl px-3 xxs:px-10 md:px-4">
        <li>ARCHIVE</li>
        <li>ABOUT</li>
        <li>RESUME</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
