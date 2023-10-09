import { useEffect } from "react";
import { useGetGalleryQuery } from "../../../../redux/features/api/baseApi";
import GalleryRow from "./GalleryRow";

const GalleryTable = () => {
  const { data: galleries, isSuccess, refetch } = useGetGalleryQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  return (
    <div>
      {galleries && Array.isArray(galleries) && galleries.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-stone-400 text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs sm:text-base font-bold  uppercase tracking-wider "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {galleries.map((gallery) => (
                  <GalleryRow key={gallery.id} gallery={gallery} />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className=" my-6 text-center text-3xl font-semibold w-full h-screen grid place-content-center">
            No Data Available
          </p>
        </>
      )}
    </div>
  );
};

export default GalleryTable;
