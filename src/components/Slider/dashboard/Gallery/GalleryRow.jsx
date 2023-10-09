const GalleryRow = ({ gallery, sl }) => {
  const { image } = gallery;

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img
              className="h-full w-full rounded-md border border-zinc-400 block object-cover"
              src={`${import.meta.env.VITE_BASE_URL}/${image[0].filename}`}
              alt={`Image of`}
            />
          </div>
        </div>
      </td>

      <td className="px-6 py-4  text-sm sm:text-base md:text-lg text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          className="py-1 px-2 text-xs sm:text-base rounded-md drop-shadow-md bg-primary-10/90 text-white font-semibold
         "
        >
          Edit
        </button>

        <button
          className="py-1 px-2 text-xs sm:text-base rounded-md drop-shadow-md bg-rose-500 text-white font-semibold
         "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default GalleryRow;
