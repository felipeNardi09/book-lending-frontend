import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/apiUsers";
import { useCookies } from "react-cookie";
import { useAuth } from "../../contexts/AuthContext";

export function useLogin() {
  const [, setCookie] = useCookies("jwt");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const {
    mutate: login,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      return loginRequest(data);
    },
    onSuccess: (user) => {
      setCookie("token", user.data.token.token);
      setCookie("iat", user.data.token.iat);
      setUser(user.data.user);

      user.data.user.role === "admin"
        ? navigate("/booksDashboard")
        : navigate("/availablebooks");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { login, error, isPending, isSuccess };
}
