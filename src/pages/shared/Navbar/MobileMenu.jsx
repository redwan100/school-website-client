import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const navmenu = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 24,
    name: "Teachers",
    path: "/teacher",
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

const MobileMenu = ({ showMenu, toggleMenu }) => {
  return (
    <div
      className={`fixed z-30 w-[80%] top-0 right-0 min-h-screen bg-green-100 flex items-center justify-center lg:hidden transition-all ${
        showMenu ? "translate-x-0" : "translate-x-[110%]"
      }`}
    >
      <AiOutlineClose
        onClick={toggleMenu}
        className="absolute w-10 h-10 bg-primary-10 text-zinc-50 rounded-full p-2 cursor-pointer top-1/2 -left-4 -translate-y-1/2 drop-shadow-md border border-green-500"
      />
      <div className="flex flex-col gap-3 w-1/2 mx-auto">
        <li className="list-none text-zinc-50 uppercase text-sm md:text-base rounded-md hover:bg-green-700 py-2 px-3 transition-all border-2 border-stone-300 text-center bg-stone-600">
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        {navmenu.map((menu) => (
          <li
            key={menu.id}
            className="list-none uppercase text-sm text-center  font-semibold md:text-base rounded-md hover:bg-green-700 hover:text-green-50 py-1 px-2 transition-all w-full"
          >
            <NavLink to={menu.path} className="w-full">
              {menu.name}
            </NavLink>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
