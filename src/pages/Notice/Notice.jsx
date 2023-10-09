import NoticeCard from "./NoticeCard";
const notices = [
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
  {
    _id: 21,
    noticeName: "Notice 1",
    filename: "filename",
  },
];
const Notice = () => {
  return (
    <div>
      <div className="max-w-screen-md w-full mx-auto my-4">
        {/* TODO: LAST NEWS  */}

        <div className="border-4 rounded-md border-primary-10/70 mb-8 h-max">
          <h1 className="bg-primary-10/70 p-3 text-center text-2xl text-white">
            Notice
          </h1>

          <div>
            {notices && notices.length > 0 && Array.isArray(notices) ? (
              <>
                {notices.map((notice) => (
                  <NoticeCard key={notice._id} notice={notice} />
                ))}
              </>
            ) : (
              <>
                <p className="text-center text-2xl py-4 text-primary-10">
                  No Notice Available
                </p>
                <Link
                  to="/"
                  className="bg-primary-10 text-white py-1 px-2 rounded-md w-max my-5 block mx-auto"
                >
                  Goto Home page
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
