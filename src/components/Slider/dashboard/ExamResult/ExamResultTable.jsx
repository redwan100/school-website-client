import { useEffect } from "react";
import { useGetResultQuery } from "../../../../redux/features/api/baseApi";
import ExamResultRow from "./ExamResultRow";
import PageLoader from "../../../../pages/shared/PageLoader";

const ExamResultTable = () => {
  const { data: results, refetch, isSuccess, isLoading } = useGetResultQuery();
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <div>
      {results && Array.isArray(results) && results.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-stone-400 text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    subject
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    group
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    class
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    number
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
                {results.map((res) => (
                  <ExamResultRow key={res._id} result={res} refetch={refetch} />
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

export default ExamResultTable;
