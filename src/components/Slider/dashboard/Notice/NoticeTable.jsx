import { useEffect } from "react";
import { useGetNoticeQuery } from "../../../../redux/features/api/baseApi";
import NoticeRow from "./NoticeRow";

const NoticeTable = () => {
  const { data: notices, isSuccess, refetch } = useGetNoticeQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  return (
    <div>
      {notices && Array.isArray(notices) && notices.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-stone-400 text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    notice Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs sm:text-base font-bold  uppercase tracking-wider "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, i) => (
                  <NoticeRow
                    key={notice._id}
                    n={notice}
                    sl={i}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <p className=" my-6 text-center text-3xl font-semibold w-full h-screen grid place-content-center">
            No Data Available
          </p>
        </>
      )}
    </div>
  );
};

export default NoticeTable;
