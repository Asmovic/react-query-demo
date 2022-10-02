import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, isError, error, data } = useSuperHeroData(heroId);
  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div className="error">{error.message}</div>;
  }
  return (
    <div>
      <h3>{data.data.name}</h3>
      <h6>{data.data.alterEgo}</h6>
    </div>
  );
};

export default RQSuperHeroPage;
