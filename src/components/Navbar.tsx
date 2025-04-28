import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div
        id="navbar"
        className="top-0 h-20 w-full justify-center text-center fixed font-poppins"
      >
        <ul className="grid grid-cols-3 lg:inline-flex gap-5 xl:gap-16 p-5 xl:text-xl">
          <Link href={"#home"}>
            <li className="group">
              Home
              <span />
            </li>
          </Link>
          <Link href={"#about"}>
            <li className="group">
              About
              <span />
            </li>
          </Link>
          <Link href={"#education"}>
            <li className="group">
              Education
              <span />
            </li>
          </Link>
          <Link href={"#history"}>
            <li className="group">
              History
              <span />
            </li>
          </Link>
          <Link href={"#projects"}>
            <li className="group">
              Projects
              <span />
            </li>
          </Link>
          <Link href={"#contacts"}>
            <li className="group">
              Contacts
              <span />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
