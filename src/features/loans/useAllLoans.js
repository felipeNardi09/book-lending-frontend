import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { getAllLoans } from "../../services/apiLoans";

export function useAllLoans(id) {
  const [cookies] = useCookies("jwt");

  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["loan"],
    queryFn: () => getAllLoans(cookies.token),
  });

  return { data, error, isPending, isSuccess };
}
