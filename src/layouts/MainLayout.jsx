import { Outlet } from "react-router-dom";

import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mx-2">
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default MainLayout;
