import { useState } from "react";
import { useDeleteCommunicationMutation } from "../../../../redux/features/api/baseApi";
import DeleteModal from "../../../Modal/DeleteModal";

import ContactEditModal from "../../../Modal/ContactEditModal";

const ContactRow = ({ communication, refetch }) => {
  const { _id, phone, email, address } = communication;

  const [deleteContact] = useDeleteCommunicationMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const modalHandler = async (id) => {
    try {
      await deleteContact(id);
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
          {email}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {phone}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm sm:text-base md:text-lg text-gray-900">
          {address}
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
        modalHandler={modalHandler}
        isOpen={isOpen}
        closeModal={closeModal}
        id={_id}
      />

      <ContactEditModal
        id={_id}
        refetch={refetch}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
      />
    </tr>
  );
};

export default ContactRow;
