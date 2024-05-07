import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupRequest } from "../../services/apiUsers";
import { useCookies } from "react-cookie";

export function useSignup() {
  const navigate = useNavigate();
  const [, setCookie] = useCookies("jwt");

  const {
    mutate: signup,
    data: user,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: signupRequest,
    onSuccess: (user) => {
      console.log(user);
      setCookie("token", user.data.token.token);
      setCookie("iat", user.data.token.iat);
      navigate("/availablebooks");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { signup, user, error, isPending, isSuccess };
}
