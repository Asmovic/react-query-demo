import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const { data: superheroes } = useQuery("superheroes", fetchHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
};

export default ParallelQueriesPage;
