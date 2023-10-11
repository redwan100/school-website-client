import { BsArrowRightShort } from "react-icons/bs";

function StudentCard({ student }) {
  const { name, class: studentClass, avatar, roll } = student;
  return (
    <div className="bg-gradient-to-r from-stone-100 to-stone-300 rounded-lg overflow-hidden border border-stone-300 max-w-[20rem] sm:max-w-full mx-auto w-full">
      <div className="text-zinc-700 p-3">
        <div className="rounded-md overflow-hidden max-h-[10rem]">
          <img
            src={`${import.meta.env.VITE_BASE_URL}/${avatar}`}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Card content goes here */}
        <div className="mt-2 flex flex-col capitalize text-stone-600 font-medium">
          <p>
            name: <span className="text-zinc-800">{name}</span>
          </p>
          <p>
            class: <span className="text-zinc-800">{studentClass}</span>
          </p>
          <p>
            roll: <span className="text-zinc-800">{roll}</span>
          </p>

          <div className="mt-auto">
            <button className="flex items-center justify-center gap-1 bg-slate-500 text-zinc-50 py-1 px-3 rounded-md capitalize text-sm hover:bg-slate-600  w-full mt-2">
              details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
