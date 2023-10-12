import { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  useGetSingleTeacherQuery,
  useUpdateTeacherMutation,
} from "../../redux/features/api/baseApi";

const TeacherModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [formDataToSend, setFormDataToSend] = useState({
    name: "",

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

  const { data, refetch: singleRefetch } = useGetSingleTeacherQuery(id);
  const [updateTeacher, { isLoading }] = useUpdateTeacherMutation();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataToSend({ ...formDataToSend, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTeacher({ formDataToSend, id });
      refetch();
      closeModal();
      singleRefetch();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsEditOpen(false);
  };

  return (
    <Modal
      title={"Edit Teacher"}
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
    >
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
                defaultValue={data?.name}
                onChange={handleInputChange}
                placeholder="John Doe"
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
                defaultValue={data?.phone}
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
                defaultValue={data?.designation}
                onChange={handleInputChange}
                placeholder="designation"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-primary-20/80 text-base font-bold mb-2"
                htmlFor="Date_of_joining"
              >
                Date of joining
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="Date_of_joining"
                name="Date_of_joining"
                defaultValue={data?.Date_of_joining}
                onChange={handleInputChange}
                placeholder="Date of joining"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-primary-20/80 text-base font-bold mb-2"
                htmlFor="Date_of_MPO"
              >
                Date of MPO
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="Date_of_MPO"
                name="Date_of_MPO"
                defaultValue={data?.Date_of_MPO}
                onChange={handleInputChange}
                placeholder="Date of MPO"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-primary-20/80 text-base font-bold mb-2"
                htmlFor="Date_of_birth"
              >
                Date of birth
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="Date_of_birth"
                name="Date_of_birth"
                defaultValue={data?.Date_of_birth}
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
                defaultValue={data?.SSC}
                onChange={handleInputChange}
                placeholder="SSC"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-primary-20/80 text-base font-bold mb-2"
                htmlFor="HSC"
              >
                HSC
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-primary-20/80 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="HSC"
                name="HSC"
                defaultValue={data?.HSC}
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
                defaultValue={data?.BA}
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
                defaultValue={data?.HONS}
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
                defaultValue={data?.M_ED}
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
                defaultValue={data?.B_ED}
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
                defaultValue={data?.Masters}
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
                defaultValue={data?.M_Phil}
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
                defaultValue={data?.PHD}
                onChange={handleInputChange}
                placeholder="PHD"
              />
            </div>
          </div>

          {/* TODO: SUBMIT BUTTON */}
          <div className="flex items-center justify-between">
            <button
              className="bg-primary-10/80 hover:bg-primary-10 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default TeacherModal;
