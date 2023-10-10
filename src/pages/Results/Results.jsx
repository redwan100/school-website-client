import { useGetResultQuery } from "../../redux/features/api/baseApi";
import Container from "../shared/Container";
import PageLoader from "../shared/PageLoader";
import ResultsCard from "./ResultsCard";

const Results = () => {
  const {
    data: results,

    isLoading,
  } = useGetResultQuery();

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <Container>
      {results && Array.isArray(results) && results.length > 0 ? (
        <>
          <div className="overflow-x-auto bg-zinc-200 mt-3">
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
                </tr>
              </thead>
              <tbody>
                {results.map((res) => (
                  <ResultsCard key={res._id} result={res} />
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
    </Container>
  );
};

export default Results;
