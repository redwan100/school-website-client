import { useEffect } from "react";
import { useGetStudentsQuery } from "../../../../redux/features/api/baseApi";
import StudentRow from "./StudentRow";

const studentinfo = [
  {
    id: 341,
    name: "rewdan",
    class: 6,
    roll: "4",
    img: "https://images.pexels.com/photos/8363770/pexels-photo-8363770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 341,
    name: "rewdan",
    class: 6,
    roll: "4",
    img: "https://images.pexels.com/photos/8363770/pexels-photo-8363770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 341,
    name: "rewdan",
    class: 6,
    roll: "4",
    img: "https://images.pexels.com/photos/8363770/pexels-photo-8363770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 341,
    name: "rewdan",
    class: 6,
    roll: "4",
    img: "https://images.pexels.com/photos/8363770/pexels-photo-8363770.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
const StudentTable = () => {
  const { data: studentInfo, refetch, isSuccess } = useGetStudentsQuery();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  return (
    <div>
      {studentInfo && Array.isArray(studentInfo) && studentInfo.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-stone-400 text-zinc-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    image
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs sm:text-base font-bold  uppercase tracking-wider"
                  >
                    Name
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
                    Roll
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
                {studentInfo.map((student) => (
                  <StudentRow
                    key={student.id}
                    student={student}
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

export default StudentTable;
