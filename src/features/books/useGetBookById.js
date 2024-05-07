import { useQuery } from "@tanstack/react-query";
import { getBookById } from "../../services/apiBooks";

export function useGetBookById(id) {
  const { error, data, isLoading, isSuccess } = useQuery({
    queryKey: ["book"],
    queryFn: () => getBookById(id),
  });
  return { data, error, isLoading, isSuccess };
}
