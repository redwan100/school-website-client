import { useState } from "react";
import DeleteModal from "../../../Modal/DeleteModal";
import { useDeleteStudentMutation } from "../../../../redux/features/api/baseApi";
import StudentModal from "../../../Modal/StudentModal";

const StudentRow = ({ student, refetch }) => {
  const { _id, avatar, name, class: studentClass, roll } = student;

  const [deleteStudent] = useDeleteStudentMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const modalHandler = async (id) => {
    try {
      await deleteStudent(id);
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
              src={`${import.meta.env.VITE_BASE_URL}/${avatar}`}
              alt={`Image of ${name}`}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {studentClass}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {roll}
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

      <StudentModal
        id={_id}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        refetch={refetch}
      />
    </tr>
  );
};

export default StudentRow;
