import { useQuery } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { getUsers } from "../../services/apiUsers";

export function useUsers() {
  const [cookies] = useCookies();

  const { error, data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(cookies.token),
  });

  return { data, error, isLoading };
}
