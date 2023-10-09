import { AiFillPicture, AiOutlineFilePdf } from "react-icons/ai";
import { RiDashboardLine } from "react-icons/ri";
import { PiGraduationCapFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 343,
    name: "add notice",
    path: "/dashboard/add-notice",
    icon: AiOutlineFilePdf,
  },
  {
    id: 3643,
    name: "add photo",
    path: "/dashboard/add-gallery",
    icon: AiFillPicture,
  },
  {
    id: 36343,
    name: "add about",
    path: "/dashboard/add-about",
    icon: PiGraduationCapFill,
  },
  {
    id: 36343,
    name: "add student",
    path: "/dashboard/add-student",
    icon: BsFillPeopleFill,
  },
  {
    id: 363443,
    name: "add contact",
    path: "/dashboard/add-contact",
    icon: FaRegAddressBook,
  },
  {
    id: 363363443,
    name: "add exam result",
    path: "/dashboard/add-exam-result",
    icon: FaRegAddressBook,
  },
];

const dashLink = [
  {
    id: 3443,
    name: "notice",
    path: "/dashboard/notice",
    icon: AiOutlineFilePdf,
  },
  {
    id: 36453,
    name: "photo",
    path: "/dashboard/gallery",
    icon: AiFillPicture,
  },
  {
    id: 363432,
    name: "about us",
    path: "/dashboard/about",
    icon: PiGraduationCapFill,
  },
  {
    id: 3336343,
    name: "students",
    path: "/dashboard/student",
    icon: BsFillPeopleFill,
  },
  {
    id: 36343343,
    name: "contacts",
    path: "/dashboard/contact",
    icon: FaRegAddressBook,
  },
  {
    id: 3634353343,
    name: "Exam Result",
    path: "/dashboard/contact",
    icon: FaRegAddressBook,
  },
];

const Sidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 bg-zinc-300 text-stone-50  p-2 border-2 h-screen transition-all duration-1000 flex flex-col items-center ${
        showSidebar && "w-max transition-all duration-1000"
      }`}
    >
      <div
        onClick={toggleSidebar}
        className="flex items-center gap-2 mb-3 bg-stone-500 p-2 w-full rounded-md cursor-pointer"
      >
        <RiDashboardLine size={25} />{" "}
        <span className={`text-lg ${showSidebar ? "block" : "hidden"}`}>
          Dashboard
        </span>
      </div>
      <div className="w-full flex flex-col gap-3 bg-stone-400 rounded-sm drop-shadow-sm py-3 px-2">
        {links.map(({ icon: Icon, name, path, id }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive ? "sidebarActive" : "notActive"
            }
          >
            <li className="list-none w-full h-full p-1 hover:bg-stone-500 rounded-sm flex items-center gap-2">
              <Icon size={20} />
              <span
                className={`${showSidebar ? "block capitalize" : "hidden"}`}
              >
                {name}
              </span>
            </li>
          </NavLink>
        ))}
      </div>

      <div className="w-full my-4">
        <p className={`${showSidebar ? "block capitalize" : "hidden"}`}>
          <span className="bg-stone-600 text-slate-50 py-2 px-2 block mb-2 rounded-md">
            Update and delete
          </span>
        </p>
        <div className="w-full flex flex-col gap-3 bg-stone-400 rounded-sm drop-shadow-sm py-3 px-2">
          {dashLink.map(({ icon: Icon, name, path, id }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? "sidebarActive" : "notActive"
              }
            >
              <li className="list-none w-full h-full p-1 hover:bg-stone-500 rounded-sm flex items-center gap-2">
                <Icon size={20} />
                <span
                  className={`${showSidebar ? "block capitalize" : "hidden"}`}
                >
                  {name}
                </span>
              </li>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
