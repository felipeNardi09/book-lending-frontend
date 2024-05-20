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
      console.log(data);

      return createBook(data, cookies.token);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries("books");
      toast.success("Book successfully created");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  return { addBook, data, error, isPending, isSuccess };
}
