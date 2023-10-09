import { useState } from "react";
import { useDeleteResultMutation } from "../../../../redux/features/api/baseApi";
import DeleteModal from "../../../Modal/DeleteModal";

const ExamResultRow = ({ result, refetch }) => {
  const { _id, name, subject, group, number, class: studentClass } = result;

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [deleteResult] = useDeleteResultMutation();

  const modalHandler = (id) => {
    try {
      deleteResult(id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <tr className="odd:bg-zinc-300 hover:bg-zinc-400 hover:text-white transition">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {subject}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {group}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {studentClass}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {number}
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
    </tr>
  );
};

export default ExamResultRow;
