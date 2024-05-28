import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { logOut } from "../../services/apiUsers";
import { toast } from "react-hot-toast";

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
      toast("See you later!", {
        icon: "✌️",
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { logout, error, isPending, isSuccess };
}
