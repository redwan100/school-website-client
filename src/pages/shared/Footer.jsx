import { Link } from "react-router-dom";
import {
  useGetAboutQuery,
  useGetCommunicationQuery,
} from "../../redux/features/api/baseApi";

const Footer = () => {
  const { data } = useGetCommunicationQuery();
  const { data: about, isLoading } = useGetAboutQuery();
  if (isLoading) {
    return "Loading...";
  }
  console.log();
  return (
    <div className="bg-zinc-700  pt-6 pb-3">
      <div className="container mx-auto px-3 lg:max-w-[80%] w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 ">
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
                <div key={info._id} className="text-zinc-100">
                  <h4>{info.address}</h4>
                  <h4>{info.phone}</h4>
                  <h4>{info.email}</h4>
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
    </div>
  );
};

export default Footer;
