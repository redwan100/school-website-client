import toast from "react-hot-toast";
import {
  useGetSingleTrainingQuery,
  useUpdateTrainingMutation,
} from "../../redux/features/api/baseApi";
import { useState } from "react";
import Modal from "./Modal";

const EduTrainingModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [updateTraining, { isLoading }] = useUpdateTrainingMutation();
  const { data, refetch: singleRefetch } = useGetSingleTrainingQuery(id);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
    };

    try {
      await updateTraining({ formData, id });
      closeModal();
      refetch();
      singleRefetch();
      toast.success("Update successful");
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setIsEditOpen(false);
  };
  return (
    <Modal
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
      title={"Education Training edit"}
    >
      <div className="max-w-screen-md  w-full bg-white p-6 rounded-md border border-zinc-200 mx-auto mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              defaultValue={data?.title}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              onChange={handleTitleChange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              defaultValue={data?.description}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              rows="5"
              placeholder="Description"
              onChange={handleDescriptionChange}
            />
          </div>

          <div className="mt-6">
            <button
              className="bg-primary-10/80 hover:bg-primary-10 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "Updating..." : "Update Post"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EduTrainingModal;
