import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { createLoan } from "../../services/apiLoans";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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

      toast("Have a nice reading!", {
        icon: "🤩",
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { borrowTheBook, error, isPending, isSuccess };
}
