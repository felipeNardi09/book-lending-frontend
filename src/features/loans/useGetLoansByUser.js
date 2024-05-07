import { useQuery } from "@tanstack/react-query";
import { getLoansByUser } from "../../services/apiLoans";
import { useCookies } from "react-cookie";

export function useGetLoansByUser() {
  const [cookie] = useCookies("jwt");

  const { data, error, isPending, isSuccess } = useQuery({
    queryKey: ["loans"],
    queryFn: () => getLoansByUser(cookie.token),
  });

  return { data, error, isPending, isSuccess };
}
