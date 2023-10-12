import { useState } from "react";
// import toast from "react-hot-toast";
import DeleteModal from "../../../Modal/DeleteModal";
import TeacherModal from "../../../Modal/TeacherModal";
import { useDeleteTeacherMutation } from "../../../../redux/features/api/baseApi";

const TeacherRow = ({ teacher, refetch }) => {
  const { _id, name, image, phone } = teacher;
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [deleteTeacher] = useDeleteTeacherMutation();

  const modalHandler = async (id) => {
    try {
      await deleteTeacher(id);
      closeModal();
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
      <td className="px-6 py-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12">
            <img
              className="h-full w-full rounded-md border border-zinc-400 block object-cover"
              src={`${import.meta.env.VITE_BASE_URL}/${image}`}
              alt={`Image of ${name}`}
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{phone}</div>
      </td>
      <td className="px-6 py-4  text-sm text-gray-500 flex flex-col gap-2 sm:flex-row text-right w-max mx-auto">
        <button
          onClick={() => setIsEditOpen(true)}
          className="py-1 px-4 rounded-md drop-shadow-md bg-primary-10/90 text-white font-semibold
         "
        >
          Edit
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="py-1 px-4 bg-red-500 drop-shadow-md text-white rounded-md"
        >
          Delete
        </button>
      </td>

      <DeleteModal
        modalHandler={modalHandler}
        closeModal={closeModal}
        isOpen={isOpen}
        id={_id}
      />
      <TeacherModal
        id={_id}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        refetch={refetch}
      />
    </tr>
  );
};

export default TeacherRow;
