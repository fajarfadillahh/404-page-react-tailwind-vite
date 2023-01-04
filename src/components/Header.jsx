import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(true);

  const setMenuHandler = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="header__container container flex h-24 items-center justify-between">
        <a href="#" className="header__logo text-2xl font-bold uppercase">
          XCOMPANY
        </a>

        <div
          className={`header__menu fixed inset-x-0 top-24 mx-auto w-[85%] origin-top rounded-3xl bg-gray-900 p-8 text-center transition-all duration-300 md:static md:inset-auto md:top-0 md:m-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 ${
            !menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
            <li>
              <a
                href="#"
                className="header__link font-semibold text-white md:text-gray-900"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__link font-semibold text-white md:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__link font-semibold text-white md:text-gray-900"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="header__link font-semibold text-white md:text-gray-900"
              >
                Blog
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="header__button mt-6 flex items-center justify-center rounded-full bg-white py-4 px-8 font-bold md:mt-0 md:bg-gray-900 md:text-white"
          >
            Register
          </a>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-2xl md:hidden"
          onClick={setMenuHandler}
        >
          {menuOpen ? <RiMenuLine /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
}
