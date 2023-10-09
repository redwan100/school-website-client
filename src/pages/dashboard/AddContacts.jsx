import { useEffect, useState } from "react";
import { FormTitle } from "../shared/FormTitle";
import Button from "../shared/Button";
import toast from "react-hot-toast";
import { useCreateCommunicationMutation } from "../../redux/features/api/baseApi";
const AddContacts = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const [setCommunication, { isLoading, isSuccess }] =
    useCreateCommunicationMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)

    setCommunication(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        address: "",
        phone: "",
        email: "",
      });
      toast.success("Successfully created");
    }
  }, [isSuccess]);

  return (
    <div className="min-h-screen w-full grid place-content-center">
      <FormTitle title={"add contact information"} />
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md w-full mx-auto bg-white p-3 rounded-md drop-shadow-md flex flex-col"
      >
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="text-center">
          <Button>{isLoading ? "Loading" : "Add contact"}</Button>
        </div>
      </form>
    </div>
  );
};

export default AddContacts;
