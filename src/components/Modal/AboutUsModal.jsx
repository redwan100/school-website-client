import { useState } from "react";
import Button from "../../pages/shared/Button";
import Modal from "./Modal";
import {
  useGetSingleAboutQuery,
  useUpdateAboutMutation,
} from "../../redux/features/api/baseApi";

const AboutUsModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [message, setMessage] = useState("");

  const { data, refetch: singleRefetch } = useGetSingleAboutQuery(id);
  const [updateAbout, { isLoading }] = useUpdateAboutMutation();

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  function closeModal() {
    setIsEditOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateAbout({ message, id });
      closeModal();
      refetch();
      singleRefetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
      title={"Edit Contact"}
    >
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-md w-full mx-auto bg-white p-3 rounded-md  flex flex-col"
        >
          <div className="mb-4">
            <label
              htmlFor="roll"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              About us!
            </label>
            <textarea
              onChange={handleChange}
              defaultValue={data?.message}
              id=""
              rows="5"
              className="w-full p-2 outline-none border-zinc-300 border rounded-md text-zinc-800"
            ></textarea>
          </div>

          <div className="text-center">
            <Button>{isLoading ? "Updating..." : "Update "}</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AboutUsModal;
