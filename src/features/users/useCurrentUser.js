import { useQuery } from "@tanstack/react-query";
import { getLoggedUser } from "../../services/apiUsers";
import { useCookies } from "react-cookie";

export function useCurrentUser() {
  const [cookies] = useCookies("jwt");

  const {
    data: currentUser,
    error,
    isPending,
    isSuccess,
    isFetching,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getLoggedUser(cookies.token),
    retry: 1,
  });

  return { currentUser, error, isPending, isSuccess, isFetching };
}
