import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";
import toast from "react-hot-toast";
import { useCreateNoticeMutation } from "../../redux/features/api/baseApi";
import { useNavigate } from "react-router-dom";
const AddNotice = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [noticeName, setNoticeName] = useState("");
  const [pdfName, setPdfName] = useState("UPLOAD PDF");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const [createNotice, { isLoading, isSuccess }] = useCreateNoticeMutation();

  const handleClassChange = (e) => {
    setNoticeName(e.target.value);
  };
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setPdfName(e.target.files[0]?.name);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdf", selectedFile);
      formData.append("noticeName", noticeName);

      await createNotice(formData);
      navigate("/dashboard/notice", { replace: true });

      setPdfName("UPLOAD PDF");
      setNoticeName("");
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Error uploading file");
    }
  };

  useEffect(() => {
    if (!noticeName || !selectedFile) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedFile, noticeName]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Successfully notice created");
    }
  }, [isSuccess]);
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-md w-full mx-auto">
        <FormTitle title={"add notice"} />
      </div>
      <div className="max-h-max max-w-screen-md w-full mx-auto bg-white p-5 rounded-md shadow-lg m-3">
        <div className="grid gap-3">
          <div className="mb-4">
            <label
              htmlFor="noticename"
              className="block text-primary-20/90 font-bold uppercase"
            >
              Write your notice name
            </label>
            <input
              onChange={handleClassChange}
              placeholder="write notice name"
              type="text"
              value={noticeName}
              className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
            />
          </div>
          <div className="bg-zinc-50 p-2 rounded-md text-zinc-700">
            <label
              htmlFor="pdf"
              className=" text-2xl text-center font-bold cursor-pointer block border-2 border-dashed border-zinc-300"
            >
              {pdfName}
              <input
                required
                type="file"
                hidden
                id="pdf"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <button
          disabled={isDisabled}
          onClick={handleUpload}
          className={`bg-primary-10 py-2 px-4 rounded-md
         text-white mt-6 w-full sm:max font-semibold
         text-lg ${isDisabled && "bg-zinc-300 cursor-not-allowed"}`}
        >
          {isLoading ? "Loading..." : " Add Notice"}
        </button>
      </div>
    </div>
  );
};

export default AddNotice;
