const TeacherCard = ({ teacher }) => {
  const { name, designation, image } = teacher;

  return (
    <div className=" bg-gradient-to-r from-zinc-900 via-teal-900 to-zinc-500 rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto w-full flex flex-col">
      <div className="pt-5 max-h-40 h-full w-[9rem] mx-auto">
        <img
          src={`${import.meta.env.VITE_BASE_URL}/${image}`}
          alt=""
          className="  object-contain mx-auto w-full h-full"
        />
      </div>
      <div className="text-center p-3 text-zinc-50 mt-auto">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p>{designation}</p>
      </div>
      <div className="text-center p-3 text-zinc-50 mt-auto">
        <button className="mt-3 block py-1 px-4 w-full bg-primary-10/80 rounded-md text-white hover:bg-primary-10 transition capitalize">
          details
        </button>
      </div>
    </div>
  );
};

export default TeacherCard;
