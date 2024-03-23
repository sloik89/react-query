import React from "react";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import customFetch from "../utilis";
import { toast } from "react-toastify";
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
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isLoading: deleteLoading } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log(data);
      toast.success("item removed");
    },
  });
  return { deleteTask, deleteLoading };
};

export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask, isLoading: loading } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/${id}`, { isDone }),
    onError: (err) => {
      console.log(err);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log(data);
      toast.success("item updated");
    },
  });
  return { editTask };
};
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (text) => customFetch.post("/", { title: text }),
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item added");
    },
  });
  return { createTask, isLoading };
};
