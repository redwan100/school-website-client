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
import Results from "../pages/Results/Results";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import AddEduTraining from "../pages/dashboard/AddEduTraining";
import EduTrainingTable from "../components/Slider/dashboard/EduTraining/EduTrainingTable";
import Training from "../pages/EducationAndTraining/Training";
import AddTeacher from "../pages/dashboard/AddTeacher";
import TeacherTable from "../components/Slider/dashboard/Teacher/TeacherTable";
import Teachers from "../pages/Teacher/Teacher";
import AddSchoolInfo from "../pages/dashboard/AddSchoolInfo";
import SchoolInfoTable from "../components/Slider/dashboard/SchoolInfo/SchoolInfoTable";

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
        path: "teacher",
        element: <Teachers />,
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
      {
        path: "examresult",
        element: <Results />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "education",
        element: <Training />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "/dashboard/add-schoolinfo",
        element: <AddSchoolInfo />,
      },
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
        path: "/dashboard/add-edu-training",
        element: <AddEduTraining />,
      },
      {
        path: "/dashboard/gallery",
        element: <GalleryTable />,
      },
      {
        path: "/dashboard/teacher",
        element: <TeacherTable />,
      },
      {
        path: "/dashboard/student",
        element: <StudentTable />,
      },
      {
        path: "/dashboard/school-info",
        element: <SchoolInfoTable />,
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
      {
        path: "/dashboard/edu-training",
        element: <EduTrainingTable />,
      },
    ],
  },
]);

export default router;
