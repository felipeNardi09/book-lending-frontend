import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../../services/apiBooks";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

export function useDeleteBook() {
  const [cookies] = useCookies("jwt");
  const queryClient = useQueryClient();

  const { mutate, error, isPending, isSuccess, isIdle } = useMutation({
    mutationFn: (data) => {
      return deleteBook(cookies.token, data);
    },
    onSuccess: () => {
      toast("Book has been deleted", {
        icon: "😒",
        style: { border: "2px solid yellow" },
      });
      queryClient.invalidateQueries("books");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, error, isPending, isSuccess, isIdle };
}
