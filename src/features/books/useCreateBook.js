import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { createBook } from "../../services/apiBooks";
import { toast } from "react-hot-toast";

export function useCreateBook() {
  const [cookies] = useCookies("jwt");

  const queryClient = useQueryClient();

  const {
    mutate: addBook,
    data,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      return createBook(data, cookies.token);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("books");
      toast("Book successfully creted!", {
        icon: "🤓",
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addBook, data, error, isPending, isSuccess };
}
