import { useEffect } from "react";
import { useGetCommunicationQuery } from "../../redux/features/api/baseApi";
import Container from "../shared/Container";
import PageLoader from "../shared/PageLoader";
import toast from "react-hot-toast";

const Contact = () => {
  const { data, isLoading, isSuccess, refetch } = useGetCommunicationQuery();
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {data && Array.isArray(data) && data.length > 0 ? (
        <Container>
          <div className="grid sm:grid-cols-2  mt-3 rounded-md overflow-hidden">
            <div className="bg-white p-3  text-center">
              {data?.map((info) => (
                <div
                  key={info._id}
                  className="grid place-content-center  h-full gap-3 max-w-[20rem] w-full mx-auto justify-center"
                >
                  <div className="border border-zinc-200 p-4 rounded-md">
                    <p className="text-lg font-semibold">Address:</p>
                    {info.address}
                  </div>
                  <div className="border border-zinc-200 p-4 rounded-md">
                    <p className="text-lg font-semibold">Phone:</p>
                    {info.phone}
                  </div>
                  <div className="border border-zinc-200 p-4 rounded-md">
                    <p className="text-lg font-semibold">Email:</p>
                    {info.email}
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/448877/pexels-photo-448877.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="max-w-full"
              />
            </div>
          </div>

          <div className="bg-zinc-100 p-4 rounded-md drop-shadow-sm my-10  border border-zinc-200">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl pb-2 font-medium">
              Get in touch
            </h1>
            <div className="max-w-2xl mx-auto my-3 p-5 w-full bg-zinc-200 rounded-md border border-zinc-300">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 bg-zinc-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="textarea"
                  className="block text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="textarea"
                  name="textarea"
                  className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 bg-zinc-100"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                onClick={() => toast.success("successfully massage send")}
                className="bg-zinc-500 text-white py-2 px-4 rounded hover:bg-zinc-600 focus:outline-none focus:bg-zinc-600 w-full"
              >
                Send Message
              </button>
            </div>
          </div>
        </Container>
      ) : (
        <p className="w-full h-screen  grid place-content-center text-2xl">
          No data available
        </p>
      )}
    </>
  );
};

export default Contact;
