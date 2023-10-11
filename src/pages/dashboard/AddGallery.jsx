import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCreateGalleryMutation } from "../../redux/features/api/baseApi";
import { BiImageAdd } from "react-icons/bi";

const AddGallery = () => {
  const [images, setImages] = useState();
  const [message, setMessage] = useState("select images");
  const navigate = useNavigate();
  const [createGallery, { isLoading, isSuccess }] = useCreateGalleryMutation();

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const imageList = Array.from(fileList);

    setImages(imageList);
    setMessage("successfully selected");
  };

  // Handle form input changes

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      for (let i = 0; i < images.length; i++) {
        formDataToSend.append("images", images[i]);
      }

      await createGallery(formDataToSend);
      navigate("/dashboard/gallery", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully uploaded");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (images) {
      setMessage("successfully selected");
    }
  }, [images]);
  return (
    <div className="min-h-screen w-full">
      <FormTitle title={"add gallery image"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto w-full bg-white p-4 rounded-md drop-shadow-sm"
      >
        <div className="space-y-3">
          <label
            htmlFor="images"
            className="border-2 border-zinc-100 w-full  rounded-[4px] p-4 min-h-[30vh] grid place-items-center"
          >
            <input
              hidden
              onChange={handleFileChange}
              multiple={true}
              id="images"
              type="file"
              name="images"
              className="w-full border rounded-md border-primary-10/60 py-1 px-2 focus:outline-primary-10"
            />
            <div>
              <BiImageAdd size={40} className=" w-max mx-auto" />
              <h4>{message}</h4>
            </div>
          </label>
          <button className="w-full bg-primary-10/80 py-2 text-zinc-50 rounded-md drop-shadow-md transition-all hover:bg-primary-10 ">
            {isLoading ? "Loading" : "Add Image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGallery;
