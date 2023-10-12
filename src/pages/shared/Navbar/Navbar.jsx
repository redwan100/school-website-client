import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { useGetSchoolInfoQuery } from "../../../redux/features/api/baseApi";
import PageLoader from "../PageLoader";
const navmenu = [
  {
    id: 1,
    name: "home",
    path: "/",
  },
  {
    id: 332,
    name: "teachers",
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
    id: 37,
    name: "contact",
    path: "/contact",
  },
  {
    id: 75,
    name: "about us",
    path: "/about-us",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { data: school, isLoading } = useGetSchoolInfoQuery();

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If the user scrolls down more than 50 pixels, hide the navbar
      if (prevScrollPos - currentScrollPos > 5) {
        setVisible(true);
      }
      // If the user scrolls up more than 50 pixels, show the navbar
      else if (currentScrollPos - prevScrollPos > 5) {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <nav className="w-full bg-primary-10/80 pb-4 sticky top-0 left-0 z-50">
        <div className=" py-3 bg-primary-10/90 px-2">
          {school && Array.isArray(school) && school.length > 0 ? (
            <>
              <div className="">
                {school.slice(0, 1).map((info) => (
                  <div
                    key={info._id}
                    className="flex items-center gap-3  justify-center "
                  >
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/${info.image}`}
                      alt="logo"
                      className="w-14 h-14 rounded-full"
                    />

                    <div className="text-center">
                      <h2 className="text-xl sm:text-2xl md:text-3xl text-zinc-50 font-semibold mb-1">
                        {info.instituteName}
                      </h2>
                      <h4 className="text-zinc-100 text-xl">
                        code: <span className="text-base">{info.code}</span>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center gap-3 justify-center container mx-auto lg:max-w-[90%] px-2 mt-4">
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
