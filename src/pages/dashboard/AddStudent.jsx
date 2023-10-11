import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";
import Button from "../shared/Button";
import toast from "react-hot-toast";
import { useCreateStudentMutation } from "../../redux/features/api/baseApi";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const classOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    class: classOptions[0],
    image: null, // Initialize the 'image' field with null// Default to the first class option
  });

  const navigate = useNavigate();

  const [message, setMessage] = useState("select image");

  const [createStudent, { isLoading, isSuccess }] = useCreateStudentMutation();

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newStudentData = new FormData();
    newStudentData.append("name", formData.name);
    newStudentData.append("image", formData.image);
    newStudentData.append("class", formData.class);
    newStudentData.append("roll", formData.roll);
    try {
      await createStudent(newStudentData);
      navigate("/dashboard/student", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("created successful");
      setFormData({
        name: "",
        roll: "",
        class: classOptions[0],
        image: null, // Initialize the 'image' field with null// Default to the first class option
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (formData.image) {
      setMessage("successfully image selected");
    }
  }, [formData.image]);
  return (
    <div className="min-h-screen ">
      <FormTitle title={"Add Student information"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md w-full mx-auto bg-white p-3 rounded-md drop-shadow-sm flex flex-col"
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
            value={formData.name}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image
          </label>
          <input
            type="file" // Use type 'file' for image upload
            id="image"
            name="image"
            onChange={handleFileChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}
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
            value={formData.class}
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
            value={formData.roll}
            onChange={handleChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            image
          </label>

          <label
            htmlFor="image"
            className="border-2 border-zinc-100 w-full  rounded-[4px] p-4 min-h-[30vh] grid place-items-center"
          >
            <input
              hidden
              type="file" // Use type 'file' for image upload
              id="image"
              name="image"
              onChange={handleFileChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div>
              <BiImageAdd size={40} className=" w-max mx-auto" />
              <h4>{message}</h4>
            </div>
          </label>
        </div>

        <div className="text-center">
          <Button>{isLoading ? "Loading" : "add student"}</Button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
