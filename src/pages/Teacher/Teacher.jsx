import { useEffect } from "react";
import { useGetTeachersQuery } from "../../redux/features/api/baseApi";
import Container from "../shared/Container";
import PageLoader from "../shared/PageLoader";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
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
    <div className="white mb-6 mt-4">
      <Container>
        <div className="order-0 md:order-6">
          <h1 className="text-center text-xl sm:text-2xl font-bold bg-primary-10/70 p-2 text-white mb-3 rounded-md">
            Our Honorable Teachers
          </h1>
          {teachers && Array.isArray(teachers) && teachers.length > 0 ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {teachers?.map((teacher) => (
                  <TeacherCard key={teacher._id} teacher={teacher} />
                ))}
              </div>
            </>
          ) : (
            <>
              <p>No Data Available</p>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Teachers;
