import { useState } from "react";
import { useDeleteSchoolInfoMutation } from "../../../../redux/features/api/baseApi";
import DeleteModal from "../../../Modal/DeleteModal";
import SchoolInfoModal from "../../../Modal/SchoolInfoModal";

const SchoolInfoRow = ({ school, refetch }) => {
  const { _id, image, instituteName, code } = school;

  const [deleteSchoolInfo] = useDeleteSchoolInfoMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const modalHandler = async (id) => {
    try {
      await deleteSchoolInfo(id);
      refetch();
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img
              className="h-full w-full rounded-md border border-zinc-400 block object-cover"
              src={`${import.meta.env.VITE_BASE_URL}/${image}`}
              alt={`Image of ${instituteName}`}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {instituteName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {code}
        </div>
      </td>

      <td className="px-6 py-4  text-sm sm:text-base md:text-lg text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          onClick={() => setIsEditOpen(true)}
          className="py-1 px-2 text-xs sm:text-base rounded-md drop-shadow-md bg-primary-10/90 text-white font-semibold
         "
        >
          Edit
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="py-1 px-2 text-xs sm:text-base rounded-md drop-shadow-md bg-rose-500 text-white font-semibold
         "
        >
          Delete
        </button>
      </td>

      <DeleteModal
        id={_id}
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
      />

      <SchoolInfoModal
        id={_id}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        refetch={refetch}
      />
    </tr>
  );
};

export default SchoolInfoRow;
