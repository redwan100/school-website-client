import { useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { useCreateTrainingMutation } from "../../redux/features/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddEduTraining = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [text, setText] = useState("select image");
  const navigate = useNavigate();
  const [createTraining, { isLoading }] = useCreateTrainingMutation();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setText("successfully selected image");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new FormData object and append the form data
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);

      await createTraining(formData);
      navigate("/dashboard/edu-training", { replace: true });

      toast.success("Training created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
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
            required
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="border-2 border-zinc-100 w-full  rounded-[4px] p-4 min-h-[30vh] grid place-items-center"
          >
            <input
              required
              hidden
              type="file" // Use type 'file' for image upload
              id="image"
              name="image"
              onChange={handleImageChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div>
              <BiImageAdd size={40} className=" w-max mx-auto" />
              <h4 className={`${image && "text-primary-10"}`}>
                {text || "select image"}
              </h4>
            </div>
          </label>
        </div>

        <div className="mt-6">
          <button
            className="bg-primary-10/80 hover:bg-primary-10 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoading ? "Creating..." : "Create Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEduTraining;
