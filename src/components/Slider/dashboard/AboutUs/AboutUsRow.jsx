import { useState } from "react";
import DeleteModal from "../../../Modal/DeleteModal";
import AboutUsModal from "../../../Modal/AboutUsModal";
import { useDeleteAboutMutation } from "../../../../redux/features/api/baseApi";

const AboutUsRow = ({ message, sl, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [deleteAbout] = useDeleteAboutMutation();

  const modalHandler = async (id) => {
    try {
      await deleteAbout(id);
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
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {sl + 1}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {message?.message?.length > 100 ? (
            <>{message?.message.slice(0, 100)}...</>
          ) : (
            message?.message
          )}
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
        id={message?._id}
        isOpen={isOpen}
        modalHandler={modalHandler}
        closeModal={closeModal}
      />

      <AboutUsModal
        id={message?._id}
        refetch={refetch}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
      />
    </tr>
  );
};

export default AboutUsRow;
