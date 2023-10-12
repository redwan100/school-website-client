import { useState } from "react";
import { useCreateSchoolInfoMutation } from "../../redux/features/api/baseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddSchoolInfo = () => {
  const [instituteName, setInstituteName] = useState("");
  const [code, setCode] = useState("");
  const [logo, setLogo] = useState(null);

  const navigate = useNavigate();

  const [createSchoolInfo] = useCreateSchoolInfoMutation();

  const handleInstituteNameChange = (e) => {
    setInstituteName(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new FormData object and append the form data
    const formData = new FormData();
    formData.append("instituteName", instituteName);
    formData.append("code", code);
    formData.append("logo", logo);
    try {
      await createSchoolInfo(formData);
      toast.success("successfully created");
      navigate("/dashboard/school-info");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-md w-full mx-auto mt-5 bg-white p-4 rounded-md border border-r-zinc-100">
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
            id="instituteName"
            type="text"
            placeholder="Institute Name"
            value={instituteName}
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
            id="code"
            type="text"
            placeholder="Code"
            value={code}
            onChange={handleCodeChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="logo"
          >
            Logo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>

        <div className="mt-6">
          <button
            className="bg-primary-10/80 hover:bg-primary-10 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Institute
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSchoolInfo;
