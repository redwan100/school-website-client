import { ScaleLoader } from "react-spinners";
const PageLoader = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div>
        <ScaleLoader color="#36d7b7" className="w-max" />
      </div>
    </div>
  );
};

export default PageLoader;
