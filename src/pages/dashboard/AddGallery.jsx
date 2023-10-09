import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";

import toast from "react-hot-toast";
import { useCreateGalleryMutation } from "../../redux/features/api/baseApi";

const AddGallery = () => {
  const [images, setImages] = useState();

  const [createGallery, { isLoading, isSuccess }] = useCreateGalleryMutation();

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    const imageList = Array.from(fileList);

    setImages(imageList);
  };

  // Handle form input changes

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    for (let i = 0; i < images.length; i++) {
      formDataToSend.append("images", images[i]);
    }

    createGallery(formDataToSend);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully uploaded");
    }
  }, [isSuccess]);
  return (
    <div className="min-h-screen w-full grid place-content-center">
      <FormTitle title={"add gallery image"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto w-full bg-white p-4 rounded-md drop-shadow-md "
      >
        <div className="space-y-3">
          <input
            onChange={handleFileChange}
            multiple={true}
            id="images"
            type="file"
            name="images"
            className="w-full border rounded-md border-primary-10/60 py-1 px-2 focus:outline-primary-10"
          />
          <button className="w-full bg-primary-10/80 py-2 text-zinc-50 rounded-md drop-shadow-md transition-all hover:bg-primary-10 ">
            {isLoading ? "Loading" : "Add Image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGallery;
