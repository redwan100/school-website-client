import { Link } from "react-router-dom";
import {
  useGetAboutQuery,
  useGetCommunicationQuery,
} from "../../redux/features/api/baseApi";
import PageLoader from "./PageLoader";

const Footer = () => {
  const { data } = useGetCommunicationQuery();
  const { data: about, isLoading } = useGetAboutQuery();
  if (isLoading) {
    return <PageLoader />;
  }
  console.log();
  return (
    <footer className="bg-zinc-700  pt-10 mt-5">
      <div className="container mx-auto px-3 lg:max-w-[80%] w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 py-5">
        {/* ABOUT US  */}
        <div className="text-zinc-50 ">
          <h1 className="text-2xl font-medium mb-2 uppercase">about us</h1>
          {data && Array.isArray(data) && data.length > 0 ? (
            about[0]?.message
          ) : (
            <>
              <p>No data available</p>
            </>
          )}
        </div>
        {/* INFORMATION  */}
        <div className="text-zinc-50">
          <h1 className="text-2xl font-medium mb-2 uppercase">get in touch</h1>
          {data && Array.isArray(data) && data.length > 0 ? (
            <>
              {data?.map((info) => (
                <div key={info._id} className="text-zinc-200">
                  <h4>
                    Address:{" "}
                    <span className="text-zinc-200 font-medium">
                      {info.address}
                    </span>
                  </h4>
                  <h4>
                    Phone:{" "}
                    <span className="text-zinc-200 font-medium">
                      {info.phone}
                    </span>
                  </h4>
                  <h4>
                    Email:{" "}
                    <span className="text-zinc-200 font-medium">
                      {info.email}
                    </span>
                  </h4>
                </div>
              ))}
            </>
          ) : (
            <>
              <p>No data available</p>
            </>
          )}
        </div>

        {/* IMPORTANT LINK  */}
        <div className="text-zinc-50 ">
          <h1 className="text-2xl font-medium mb-2 uppercase">
            important links
          </h1>
          <ul>
            <li className="hover:underline">
              <Link to={"/about-us"}>about us</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/examresult"}>result</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/notice"}>notice</Link>
            </li>
            <li className="hover:underline">
              <Link to={"/gallery"}>gallery</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-white text-center p-2 bg-zinc-800">
        &copy; copyrights {new Date().getFullYear()}. All rights reserved by
        redwan. Design and developed by redwan islam
      </p>
    </footer>
  );
};

export default Footer;
