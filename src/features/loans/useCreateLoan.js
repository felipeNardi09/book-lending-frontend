import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { createLoan } from "../../services/apiLoans";
import { useNavigate } from "react-router-dom";

export function useCreateLoan(bookId) {
  const [cookie] = useCookies("jwt");

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const {
    mutate: borrowTheBook,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => {
      return createLoan(bookId, cookie.token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      navigate("/your-books");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { borrowTheBook, error, isPending, isSuccess };
}
