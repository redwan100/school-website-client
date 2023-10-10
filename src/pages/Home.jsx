import { Link } from "react-router-dom";
import Slider from "../components/Slider/Slider";
import AboutUs from "./AboutUs/AboutUs";
import Student from "./Student/Student";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import About from "./AboutUs/About";
import Container from "./shared/Container";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <Slider />
      </div>

      <Container>
        <div className="grid md:grid-cols-[4fr,_1fr] my-7 mx-2 md:mx-0 py-4 ">
          <About />
          <div className="mt-3 flex flex-col gap-3">
            <Link
              to={"/examresult"}
              className="flex items-center gap-3 border border-primary-10 py-1 px-2 rounded-sm text-lg text-primary-10"
            >
              <LiaArrowCircleRightSolid />
              Result
            </Link>

            <Link
              to={"/notice"}
              className="flex items-center gap-3 border border-primary-10 py-1 px-2 rounded-sm text-lg text-primary-10"
            >
              <LiaArrowCircleRightSolid />
              Notice
            </Link>
            <Link
              to={"/contact"}
              className="flex items-center gap-3 border border-primary-10 py-1 px-2 rounded-sm text-lg text-primary-10"
            >
              <LiaArrowCircleRightSolid />
              Contact
            </Link>
          </div>
        </div>
      </Container>

      <div className="my-8 bg-white p-4 rounded-md border border-zinc-100">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-5">
          Our Top Students
        </h1>
        <Student />
      </div>
    </div>
  );
};

export default Home;
