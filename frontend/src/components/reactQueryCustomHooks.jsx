import React from "react";
import { useQuery } from "@tanstack/react-query";
import customFetch from "../utilis";
export const useFetchTasks = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  return { isLoading, isError, data };
};