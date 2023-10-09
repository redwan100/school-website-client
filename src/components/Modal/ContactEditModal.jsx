import { useState } from "react";
import Button from "../../pages/shared/Button";
import Modal from "./Modal";
import {
  useGetSingleCommunicationQuery,
  useUpdateCommunicationMutation,
} from "../../redux/features/api/baseApi";

const ContactEditModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const { data: singleData, refetch: singleRefetch } =
    useGetSingleCommunicationQuery(id);
  const [update, { isLoading }] = useUpdateCommunicationMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function closeModal() {
    setIsEditOpen(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update({ data: formData, id });
      closeModal();
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
      title={"Edit Contact"}
    >
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="max-w-screen-md w-full mx-auto bg-white p-3 flex flex-col"
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
              defaultValue={singleData?.address}
              onChange={handleChange}
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              defaultValue={singleData?.phone}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              defaultValue={singleData?.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="text-center">
            <Button>{isLoading ? "Loading" : "edit contact"}</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactEditModal;
