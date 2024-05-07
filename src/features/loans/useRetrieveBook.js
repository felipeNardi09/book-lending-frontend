import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { retrieveBook } from "../../services/apiLoans";

export function useRetrieveBook(id) {
  const [cookie] = useCookies("jwt");
  const queryClient = useQueryClient();

  const {
    mutate: returnBook,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => retrieveBook(id, cookie.token),
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      queryClient.invalidateQueries("book");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { returnBook, error, isPending, isSuccess };
}
