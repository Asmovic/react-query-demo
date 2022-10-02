import { useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    return console.log("Success", data);
  };
  const onError = (error) => {
    return console.log("Error...", error);
  };
  const { isLoading, refetch, isError, error, data } = useSuperHeroesData(
    onSuccess,
    onError
  );
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (isError) {
    return <div className="bg-blue-300">{error.message}</div>;
  }
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button className="p-2 bg-blue-300 rounded-md" onClick={refetch}>
        Fetch Heroes
      </button>
      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
}
