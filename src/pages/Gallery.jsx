import { useGetAllImagesQuery } from "../redux/features/api/baseApi";
import Container from "./shared/Container";
import PageLoader from "./shared/PageLoader";
import SectionTitle from "./shared/SectionTitle";

const Gallery = () => {
  const { data: photos, isLoading } = useGetAllImagesQuery();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <SectionTitle
        color={"bg-green-100 text-green-800"}
        isColor={true}
        title={"Gallery"}
      />
      <div className="grid gap-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 px-3 sm:px-0">
        {photos?.map((photo) => (
          <div key={photo._id} className="rounded-md overflow-hidden">
            <img
              src={`${import.meta.env.VITE_BASE_URL}/${photo}`}
              alt=""
              className="w-full h-full hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
