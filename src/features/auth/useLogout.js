import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { logOut } from "../../services/apiUsers";

export function useLogout() {
  const [cookie, , removeCookie] = useCookies("jwt");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: logout,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => logOut(cookie.token),
    onSuccess: () => {
      removeCookie("token");
      removeCookie("iat");
      queryClient.invalidateQueries("user");
      navigate("/signup");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { logout, error, isPending, isSuccess };
}
