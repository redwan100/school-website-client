import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Notice from "../pages/Notice/Notice";
import Gallery from "../pages/Gallery";
import Dashboard from "../dashboard/Dashboard";
import AddNotice from "../pages/dashboard/AddNotice";
import AddAboutUs from "../pages/dashboard/AddAboutUs";
import AddContacts from "../pages/dashboard/AddContacts";
import AddStudent from "../pages/dashboard/AddStudent";
import AddGallery from "../pages/dashboard/AddGallery";
import GalleryTable from "../components/Slider/dashboard/Gallery/GalleryTable";
import NoticeTable from "../components/Slider/dashboard/Notice/NoticeTable";
import AboutUsTable from "../components/Slider/dashboard/AboutUs/AboutUsTable";
import ContactTable from "../components/Slider/dashboard/Contacts/ContactTable";
import StudentTable from "../components/Slider/dashboard/Students/StudentTable";
import AddExamResult from "../pages/dashboard/AddExamResult";
import ExamResultTable from "../components/Slider/dashboard/ExamResult/ExamResultTable";
import Student from "../pages/Student/Student";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "student",
        element: <Student />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-notice",
        element: <AddNotice />,
      },
      {
        path: "/dashboard/add-about",
        element: <AddAboutUs />,
      },
      {
        path: "/dashboard/add-contact",
        element: <AddContacts />,
      },
      {
        path: "/dashboard/add-student",
        element: <AddStudent />,
      },
      {
        path: "/dashboard/add-gallery",
        element: <AddGallery />,
      },
      {
        path: "/dashboard/add-exam-result",
        element: <AddExamResult />,
      },
      {
        path: "/dashboard/gallery",
        element: <GalleryTable />,
      },
      {
        path: "/dashboard/student",
        element: <StudentTable />,
      },
      {
        path: "/dashboard/notice",
        element: <NoticeTable />,
      },
      {
        path: "/dashboard/about",
        element: <AboutUsTable />,
      },
      {
        path: "/dashboard/contact",
        element: <ContactTable />,
      },
      {
        path: "/dashboard/result",
        element: <ExamResultTable />,
      },
    ],
  },
]);

export default router;
