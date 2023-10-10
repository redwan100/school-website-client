import { useState } from "react";
import DeleteModal from "../../../Modal/DeleteModal";
import NoticeModal from "../../../Modal/NoticeModal";
import { useDeleteNoticeMutation } from "../../../../redux/features/api/baseApi";

const NoticeRow = ({ n, sl, refetch }) => {
  const { _id, notice } = n;

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [deleteNotice] = useDeleteNoticeMutation();

  const modalHandler = async (id) => {
    try {
      await deleteNotice(id);
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
        <div className="flex items-center">{sl + 1}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {notice}
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
        isOpen={isOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />

      <NoticeModal
        id={_id}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        refetch={refetch}
      />
    </tr>
  );
};

export default NoticeRow;
