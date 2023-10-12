import { useEffect } from "react";
import { useGetSchoolInfoQuery } from "../../../../redux/features/api/baseApi";
import PageLoader from "../../../../pages/shared/PageLoader";
import SchoolInfoRow from "./SchoolInfoRow";

const SchoolInfoTable = () => {
  const {
    data: schoolInfo,
    refetch,
    isSuccess,
    isLoading,
  } = useGetSchoolInfoQuery();

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
      {schoolInfo && Array.isArray(schoolInfo) && schoolInfo.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-stone-400 text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    logo
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    Institute name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    institute code
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
                {schoolInfo.map((school) => (
                  <SchoolInfoRow
                    key={school.id}
                    school={school}
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

export default SchoolInfoTable;
