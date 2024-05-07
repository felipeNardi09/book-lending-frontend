import { useQuery } from "@tanstack/react-query";
import { getCurrentLoan } from "../../services/apiLoans";
import { useCookies } from "react-cookie";

export function useGetCurrentLoan(id) {
  const [cookies] = useCookies("jwt");

  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["loan"],
    queryFn: () => getCurrentLoan(id, cookies.token),
  });

  return { data, error, isPending, isSuccess };
}
