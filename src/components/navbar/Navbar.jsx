import { HiMenu, HiChevronUp } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  let [menu, setMenu] = useState(false);

  return (
    <div className="py-4 md:py-6 fixed top-0 z-50 bg-[#f9f9f9]/40 backdrop-blur-sm md:bg-white w-full drop-shadow-lg">
      <nav>
        <div className="flex justify-center align-middle">
          <HiMenu
            size={42}
            className={`md:hidden ${menu ? " hidden" : ""}`}
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>

        <div
          className={`my-5 text-2xl flex flex-col items-center text-center md:my-0 md:flex md:flex-row md:justify-evenly md:text-20px
            ${menu ? "" : " hidden"}`}
        >
          <ul className="space-y-5 md:space-y-0 md:w-full md:space-x-8 md:flex md:flex-row md:justify-evenly">
            <li>
              <Link href="#home" scroll={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" scroll={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="#help" scroll={false}>
                Help capibaras
              </Link>
            </li>
            <li>
              <Link href="#contact" scroll={false}>
                Contact us
              </Link>
            </li>
          </ul>
          <div className="flex justify-center md:hidden">
            {menu ? (
              <HiChevronUp
                size={42}
                className="mt-12"
                onClick={() => {
                  setMenu(!menu);
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
