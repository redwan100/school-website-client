import { useEffect } from "react";
import PageLoader from "../../../../pages/shared/PageLoader";
import { useGetTeachersQuery } from "../../../../redux/features/api/baseApi";
import TeacherRow from "./TeacherRow";

const TeacherTable = () => {
  const {
    data: teachers,
    isLoading,
    refetch,
    isSuccess,
  } = useGetTeachersQuery();

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
      {teachers && Array.isArray(teachers) && teachers.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-zinc-300 ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs sm:text-base font-bold text-gray-500 uppercase tracking-wider "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <TeacherRow
                    key={teacher._id}
                    teacher={teacher}
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

export default TeacherTable;
