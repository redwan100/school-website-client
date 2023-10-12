import { useEffect } from "react";
import { useGetStudentsQuery } from "../../redux/features/api/baseApi";
import Container from "../shared/Container";
import PageLoader from "../shared/PageLoader";
import StudentCard from "./StudentCard";

const Student = () => {
  const {
    data: students,
    isLoading,
    isSuccess,
    refetch,
  } = useGetStudentsQuery();
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <Container>
      {students && Array.isArray(students) && students.length > 0 ? (
        <div className="grid  gap-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 my-3 mx-2 sm:mx-0">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))}
        </div>
      ) : (
        <p className="w-full min-h-[85vh] grid place-content-center text-lg sm:text-xl md:text-2xl font-semibold">
          No data available
        </p>
      )}
    </Container>
  );
};

export default Student;
