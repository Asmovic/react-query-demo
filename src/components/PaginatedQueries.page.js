import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (limit, pageNumber) => {
  return axios.get(
    `http://localhost:4000/colors/?_limit=${limit}&_page=${pageNumber}`
  );
};
const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(2);
  const { isLoading, isFetching, isError, error, data } = useQuery(
    ["colors", limit, pageNumber],
    () => fetchColors(limit, pageNumber),
    { keepPreviousData: true }
  );
  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div className="error">{error.message}</div>;
  }
  return (
    <div>
      <div className="mt-2">
        <label>Limit</label>
        <input
          value={limit}
          onChange={(event) => setLimit(event.target.value)}
          className="border-2 border-teal-700 ml-2"
        />
      </div>
      {data?.data.map((color) => {
        return (
          <div key={color.id}>
            <h2>
              {color.id}. {color.label}
            </h2>
          </div>
        );
      })}
      <div className="flex justify-between mt-3">
        <button
          className="rounded-full p-2 bg-blue-500"
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Previous Button
        </button>
        <button
          className="rounded-full p-2 bg-blue-500"
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 5}
        >
          Next Button
        </button>
      </div>
      {isFetching && <h1>Loading...</h1>}
    </div>
  );
};

export default PaginatedQueriesPage;
