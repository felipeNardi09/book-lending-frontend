import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";

export function useBooks() {
  const { error, data, isPending, isSuccess } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return { data, error, isPending, isSuccess };
}
