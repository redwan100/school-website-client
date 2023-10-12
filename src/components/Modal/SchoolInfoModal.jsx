import { useState } from "react";
import Modal from "./Modal";
import toast from "react-hot-toast";
import {
  useGetSchoolInfoSingleQuery,
  useUpdateSchoolInfoMutation,
} from "../../redux/features/api/baseApi";

const SchoolInfoModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [instituteName, setInstituteName] = useState("");
  const [code, setCode] = useState("");

  const [updateSchoolInfo, { isLoading }] = useUpdateSchoolInfoMutation();
  const { data, refetch: singleRefetch } = useGetSchoolInfoSingleQuery(id);

  const handleInstituteNameChange = (e) => {
    setInstituteName(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const closeModal = () => {
    setIsEditOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      instituteName,
      code,
    };
    try {
      await updateSchoolInfo({ formData, id });
      closeModal();
      toast.success("successfully updated");
      refetch();
      singleRefetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
      title={"Edit School Information"}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="instituteName"
          >
            Institute Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={data?.instituteName}
            id="instituteName"
            type="text"
            placeholder="Institute Name"
            onChange={handleInstituteNameChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="code"
          >
            Code
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={data?.code}
            id="code"
            type="text"
            placeholder="Code"
            onChange={handleCodeChange}
          />
        </div>

        <div className="mt-6">
          <button
            className="bg-primary-10/80 hover:bg-primary-10 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SchoolInfoModal;
