export default function Navbar() {
  return (
    <>
      <div
        id="navbar"
        className="top-0 h-20 w-full justify-center text-center fixed font-poppins"
      >
        <ul className="inline-flex gap-5 xl:gap-16 p-5 xl:text-xl">
          <li className="group">
            Home
            <span />
          </li>
          <li className="group">
            About
            <span />
          </li>
          <li className="group">
            Education
            <span />
          </li>
          <li className="group">
            Project
            <span />
          </li>
          <li className="group">
            Contact
            <span />
          </li>
        </ul>
      </div>
    </>
  );
}
