import { useState } from "react";
import { Link } from "react-router-dom";

import {
  useSuperHeroesData,
  useAddSuperHeroData,
} from "../hooks/useSuperHeroesData";

export default function RQSuperHeroesPage() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");
  const {
    mutate,
    isLoading: adding,
    isError: addError,
    error: addErrorObj,
  } = useAddSuperHeroData();
  const onSuccess = (data) => {
    return console.log("Success", data);
  };
  const onError = (error) => {
    return console.log("Error...", error);
  };
  const onAddHero = () => {
    const hero = { name, alterEgo };
    mutate(hero);
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
      <div>
        <input
          className="border-2 border-teal-700 m-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border-2 border-teal-700 m-2"
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button className="p-2 bg-green-300 rounded-md" onClick={onAddHero}>
          {adding ? "Adding.." : "Add Hero"}
        </button>
      </div>
      <div>{addError && <h1>{addErrorObj.message}</h1>}</div>
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
