import { useQuery } from "@tanstack/react-query";
import { getBooks } from "../../services/apiBooks";

export function useBooks() {
  const { error, data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return { data, error, isLoading };
}
