import { useState } from "react";
import Button from "../shared/Button";

const AddExamResult = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    group: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-screen-md w-full mx-auto mt-20">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-semibold mb-4">Exam Result Form</h1>
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
