const TrainingCard = ({ training }) => {
  const { title, description, avatar } = training;
  return (
    <div className="flex mb-5 flex-col items-center rounded-md sm:flex-row">
      <div className="-mr-16 flex-1 bg-slate-100 z-20 p-4 -mb-">
        <h2 className="text-2xl sm:text-3xl capitalize font-medium text-zinc-700">
          {title}
        </h2>
        <h4 className="text-zinc-600">{description}</h4>
      </div>
      <div className="flex-1">
        <img src={`${import.meta.env.VITE_BASE_URL}/${avatar}`} alt="" />
      </div>
    </div>
  );
};

export default TrainingCard;
