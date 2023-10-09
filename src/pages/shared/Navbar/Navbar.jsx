import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
const navmenu = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 2,
    name: "notice",
    path: "/notice",
  },
  {
    id: 3,
    name: "gallery",
    path: "/gallery",
  },
  {
    id: 4,
    name: "student",
    path: "/student",
  },
  {
    id: 5,
    name: "exam & results",
    path: "/examresult",
  },
  {
    id: 6,
    name: "education & training",
    path: "/education",
  },
  {
    id: 7,
    name: "about us page",
    path: "/about",
  },
  {
    id: 7,
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <nav className="w-full bg-primary-10/80 py-4 sticky top-0 left-0 z-20">
        <div className="flex items-center gap-3 justify-center container mx-auto lg:max-w-[90%] px-2">
          {navmenu.map((menu) => (
            <li
              key={menu.id}
              className="list-none text-zinc-50 uppercase text-sm md:text-base rounded-md hidden lg:block hover:bg-green-700 py-1 px-2 transition-all"
            >
              <NavLink
                to={menu.path}
                className={({ isActive }) => (isActive ? "active" : "pending")}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
          <li className="list-none text-zinc-50 uppercase text-sm md:text-base rounded-md hidden lg:block hover:bg-green-700 py-1 px-2 transition-all  bg-slate-500">
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <HiOutlineMenuAlt2
            onClick={toggleMenu}
            className="text-zinc-50 text-xl cursor-pointer ml-auto block lg:hidden"
          />
        </div>
      </nav>
      {/* TODO: sidebar */}
      <MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
