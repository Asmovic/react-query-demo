import React from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors/?_limit=2&_page=${pageParam}`);
};
const InfiniteQueriesPage = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <div>Loading.....</div>;
  }
  if (isError) {
    return <div className="error">{error.message}</div>;
  }
  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <React.Fragment key={i}>
              {group.data.map((color) => (
                <h2 key={color.id}>
                  {color.id} {color.label}
                </h2>
              ))}
            </React.Fragment>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
          Load More
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
};

export default InfiniteQueriesPage;
