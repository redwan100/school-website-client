import { BsFileEarmarkPdf } from "react-icons/bs";

const NoticeCard = ({ notice }) => {
  const { notice: noticeName, filename } = notice;
  return (
    <>
      <div className="flex justify-between items-center   bg-primary-10/10 py-2 px-1 border-b-2 border-primary-10 border-dotted">
        <div>
          <p className="text-lg sm:text-xl flex items-center gap-1 text-primary-10 font-bold">
            <BsFileEarmarkPdf size={25} /> {noticeName}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="text-white bg-primary-10/80 hover:bg-primary-10  transition py-1 px-2 rounded-md drop-shadow-md uppercase">
            <a href="" download={filename} className="md:text-xs">
              {" "}
              Download
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
