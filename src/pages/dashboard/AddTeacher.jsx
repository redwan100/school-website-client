import { useState } from "react";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    phone: "",
    designation: "",
    First_Date_of_joining: "",
    Date_of_joining: "",
    Date_of_MPO: "",
    Date_of_birth: "",
    SSC: "",
    HSC: "",
    BA: "",
    HONS: "",
    M_ED: "",
    B_ED: "",
    Masters: "",
    M_Phil: "",
    PHD: "",
  });

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (you can implement the submission logic here)
  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can send the formData to your backend or perform any other actions here

    // Create a FormData object to send the form data to the server
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("phone", formData.phone);

    formDataToSend.append("designation", formData.designation);
    formDataToSend.append(
      "First_Date_of_joining",
      formData.First_Date_of_joining
    );
    formDataToSend.append("Date_of_joining", formData.Date_of_joining);
    formDataToSend.append("Date_of_MPO", formData.Date_of_MPO);
    formDataToSend.append("Date_of_birth", formData.Date_of_birth);
    formDataToSend.append("SSC", formData.SSC);
    formDataToSend.append("HSC", formData.HSC);
    formDataToSend.append("BA", formData.BA);
    formDataToSend.append("HONS", formData.HONS);
    formDataToSend.append("M_ED", formData.M_ED);
    formDataToSend.append("B_ED", formData.B_ED);
    formDataToSend.append("Masters", formData.Masters);
    formDataToSend.append("M_Phil", formData.M_Phil);
    formDataToSend.append("PHD", formData.PHD);
  };
  return (
    <div className="max-w-screen-lg mx-auto border border-zinc-100  w-full ">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleFileChange}
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="0123456789"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="designation"
            >
              designation
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              placeholder="designation"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              First Date of joining
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="First_Date_of_joining"
              name="First_Date_of_joining"
              value={formData.First_Date_of_joining}
              onChange={handleInputChange}
              placeholder="First Date of joining"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              Date of joining
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Date_of_joining"
              name="Date_of_joining"
              value={formData.Date_of_joining}
              onChange={handleInputChange}
              placeholder="Date of joining"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              Date of MPO
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Date_of_MPO"
              name="Date_of_MPO"
              value={formData.Date_of_MPO}
              onChange={handleInputChange}
              placeholder="Date of MPO"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              Date of birth
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Date_of_birth"
              name="Date_of_birth"
              value={formData.Date_of_birth}
              onChange={handleInputChange}
              placeholder="Date of birth"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="SSC"
            >
              SSC
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="SSC"
              name="SSC"
              value={formData.SSC}
              onChange={handleInputChange}
              placeholder="SSC"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="phone"
            >
              HSC
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="HSC"
              name="HSC"
              value={formData.HSC}
              onChange={handleInputChange}
              placeholder="HSC"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="BA"
            >
              BA
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="BA"
              name="BA"
              value={formData.BA}
              onChange={handleInputChange}
              placeholder="BA"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="HONS"
            >
              HONS
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="HONS"
              name="HONS"
              value={formData.HONS}
              onChange={handleInputChange}
              placeholder="HONS"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="M_ED"
            >
              M ED
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="M_ED"
              name="M_ED"
              value={formData.M_ED}
              onChange={handleInputChange}
              placeholder="M_ED"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="B_ED"
            >
              B ED
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="B_ED"
              name="B_ED"
              value={formData.B_ED}
              onChange={handleInputChange}
              placeholder="B_ED"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="Masters"
            >
              Masters
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="Masters"
              name="Masters"
              value={formData.Masters}
              onChange={handleInputChange}
              placeholder="Masters"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="M_Phil"
            >
              M_Phil
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="M_Phil"
              name="M_Phil"
              value={formData.M_Phil}
              onChange={handleInputChange}
              placeholder="M_Phil"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-primary-20/80 text-base font-bold mb-2"
              htmlFor="PHD"
            >
              PHD
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="PHD"
              name="PHD"
              value={formData.PHD}
              onChange={handleInputChange}
              placeholder="PHD"
            />
          </div>
        </div>

        {/* TODO: SUBMIT BUTTON */}
        <div className="flex items-center justify-between">
          <button
            className="bg-primary-20/80 hover:bg-primary-20 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
