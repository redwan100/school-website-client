import { useState } from "react";
import Button from "../shared/Button";
import { FormTitle } from "../shared/FormTitle";
import { useCreateResultMutation } from "../../redux/features/api/baseApi";
import toast from "react-hot-toast";

const AddExamResult = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    group: "",
    number: "",
    class: "1", // Default class value
  });

  const [createResult] = useCreateResultMutation();

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
      await createResult(formData);
      toast.success("Success Result Created");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-md w-full mx-auto mt-20">
      <FormTitle title={"Add Exam Result"} />
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
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
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
              value={formData.class}
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
              value={formData.subject}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
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
              value={formData.group}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
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
              value={formData.number}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <Button>Add Result</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExamResult;
