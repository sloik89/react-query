import React from "react";
import Item from "./Item";
import { useFetchTasks } from "./reactQueryCustomHooks";
const Items = () => {
  const { data, isLoading, isError: error } = useFetchTasks();
  console.log(data);
  if (error) {
    return <p> {error.message}</p>;
  }
  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  return (
    <div className="items">
      {data.taskList.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
