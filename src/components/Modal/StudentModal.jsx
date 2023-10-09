import { useState } from "react";
import Button from "../../pages/shared/Button";
import Modal from "./Modal";
import {
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
} from "../../redux/features/api/baseApi";

const StudentModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const classOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    class: classOptions[0],
  });

  const { data, refetch: singleRefetch } = useGetSingleStudentQuery(id);
  const [updateStudent, { isLoading }] = useUpdateStudentMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function closeModal() {
    setIsEditOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateStudent({ formData, id });
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
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={data?.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              defaultValue={data?.class}
              onChange={handleChange}
              className=" border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {classOptions.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="roll"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Roll
            </label>
            <input
              type="text"
              id="roll"
              name="roll"
              defaultValue={data?.roll}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="text-center">
            <Button>{isLoading ? "Updating" : "Update student"}</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default StudentModal;
