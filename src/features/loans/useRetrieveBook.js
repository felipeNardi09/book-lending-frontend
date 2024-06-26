import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { retrieveBook } from "../../services/apiLoans";
import toast from "react-hot-toast";

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

      toast("Book has been returned!", {
        icon: "👌",
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { returnBook, error, isPending, isSuccess };
}
