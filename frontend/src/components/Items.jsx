import React from "react";
import Item from "./Item";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utilis";
const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });
  console.log(isError, error);
  if (isError) {
    return <p> {error.message}</p>;
  }
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div className="items">
      {data.data.taskList.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
