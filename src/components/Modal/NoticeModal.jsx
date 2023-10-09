import { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  useGetSingleNoticeQuery,
  useUpdateNoticeMutation,
} from "../../redux/features/api/baseApi";
import toast from "react-hot-toast";
const NoticeModal = ({ isEditOpen, setIsEditOpen, id, refetch }) => {
  const [noticeName, setNoticeName] = useState("");

  const [updateNotice, { isLoading }] = useUpdateNoticeMutation();
  const { data, refetch: singleRefetch } = useGetSingleNoticeQuery(id);

  const handleChange = (e) => {
    setNoticeName(e.target.value);
  };

  const closeModal = () => {
    setIsEditOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateNotice({ noticeName, id });
      toast.success("Updated successful");
      closeModal();
      singleRefetch();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      title={"Notice Edit"}
      isEditOpen={isEditOpen}
      setIsEditOpen={setIsEditOpen}
    >
      <form onSubmit={handleSubmit} className="">
        <div className="max-h-max max-w-screen-md w-full mx-auto bg-white p-5 rounded-md -lg m-3">
          <div className="grid gap-3">
            <div className="mb-4">
              <input
                onChange={handleChange}
                placeholder="write notice name"
                type="text"
                className="w-full mt-1 p-2 border border-primary-20/30 rounded focus:outline-none focus:border-primary-20/70"
                defaultValue={data?.notice}
              />
            </div>
          </div>
          <button
            className={`bg-primary-10 py-2 px-4 rounded-md
         text-white mt-6 w-full sm:max font-semibold
         text-lg `}
          >
            {isLoading ? "Updating..." : " update Notice"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NoticeModal;
