import toast from "react-hot-toast";
import Button from "../../pages/shared/Button";
import Modal from "./Modal";
import { useState } from "react";
import {
  useGetSingleResultQuery,
  useUpdateResultMutation,
} from "../../redux/features/api/baseApi";

const ResultModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    group: "",
    number: "",
    class: "1", // Default class value
  });

  const { data, refetch: singleRefetch } = useGetSingleResultQuery(id);
  const [updateResult] = useUpdateResultMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateResult({ formData, id });
      refetch();
      singleRefetch();
      setIsEditOpen(false);
      toast.success("Update success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      title={"Edit Result"}
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
    >
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={data?.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-600"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              defaultValue={data?.class}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={(i + 1).toString()}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-600"
            >
              Subject Name
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              defaultValue={data?.subject}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="group"
              className="block text-sm font-medium text-gray-600"
            >
              Group Name
            </label>
            <input
              type="text"
              id="group"
              name="group"
              defaultValue={data?.group}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-600"
            >
              Number
            </label>
            <input
              type="number"
              id="number"
              min={0}
              max={100}
              name="number"
              defaultValue={data?.number}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <Button>Add Result</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ResultModal;
