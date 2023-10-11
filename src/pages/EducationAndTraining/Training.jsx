import { useEffect } from "react";
import { useGetTrainingQuery } from "../../redux/features/api/baseApi";
import PageLoader from "../shared/PageLoader";
import TrainingCard from "./TrainingCard";
import Container from "../shared/Container";

const Training = () => {
  const { data, isLoading, isSuccess, refetch } = useGetTrainingQuery();

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
      {data && Array.isArray(data) && data.length > 0 ? (
        data?.map((training) => (
          <TrainingCard key={training._id} training={training} />
        ))
      ) : (
        <>
          <p className="grid place-content-center">No data available</p>
        </>
      )}
    </Container>
  );
};

export default Training;
