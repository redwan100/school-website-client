import { useGetAboutQuery } from "../../redux/features/api/baseApi";
import Gallery from "../Gallery";
import Container from "../shared/Container";
import PageLoader from "../shared/PageLoader";

const AboutUs = () => {
  const { data, isLoading } = useGetAboutQuery();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Container>
        {data && Array.isArray(data) && data.length > 0 ? (
          <div className="my-3 border-2 border-primary-10/80 rounded-md">
            <h1 className="text-xl sm:text-2xl md:text-4xl block text-center bg-primary-10/80  text-zinc-50 font-semibold p-2">
              About us
            </h1>
            <div className="flex flex-col gap-3 p-3 text-zinc-800">
              {data.map((des) => (
                <p key={des._id}>{des.message}</p>
              ))}
            </div>
          </div>
        ) : (
          <p className="w-full min-h-[85vh] grid place-items-center text-lg sm:text-xl md:text-3xl">
            No data available
          </p>
        )}
      </Container>
      <Gallery />
    </>
  );
};

export default AboutUs;
