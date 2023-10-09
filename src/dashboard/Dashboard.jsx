import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <div>
      <div>
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </div>
      <div
        className={` ${
          showSidebar ? "ml-[10rem] transition-all" : "ml-[3rem] transition-all"
        }`}
      >
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
};

export default Dashboard;
