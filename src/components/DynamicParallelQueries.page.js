import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

const DynamicParallelQueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      };
    })
  );
  console.log(queryResults);
  return <div>Dynamic Parallel Queries</div>;
};

export default DynamicParallelQueriesPage;
