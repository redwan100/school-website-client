import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";
import toast from "react-hot-toast";
import { useCreateAboutMutation } from "../../redux/features/api/baseApi";

const AddAboutUs = () => {
  const [message, setMessage] = useState("");
  const [createAbout, { isLoading, isSuccess }] = useCreateAboutMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    createAbout({ message });
  };

  useEffect(() => {
    if (isSuccess) {
      setMessage("");
      toast.success("successfully created");
    }
  }, [isSuccess]);

  return (
    <div className="min-h-screen w-full grid place-content-center">
      <FormTitle title={"About us"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mx-auto w-full bg-white p-4 rounded-md drop-shadow-md "
      >
        <div className="space-y-3">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="write here..."
            id=""
            cols="50"
            rows="10"
            className="w-full border rounded-md border-primary-10/60 py-1 px-2 focus:outline-primary-10"
          ></textarea>
          <button className="w-full bg-primary-10/80 py-2 text-zinc-50 rounded-md drop-shadow-md transition-all hover:bg-primary-10 uppercase ">
            {isLoading ? "Loading..." : "Add About"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAboutUs;
