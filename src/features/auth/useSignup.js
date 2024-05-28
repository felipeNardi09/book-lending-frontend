import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupRequest } from "../../services/apiUsers";
import { useCookies } from "react-cookie";
import { toast } from "react-hot-toast";

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
      setCookie("token", user.data.token.token);
      setCookie("iat", user.data.token.iat);

      user.data.user.role === "admin"
        ? navigate("/booksDashboard")
        : navigate("/availablebooks");
      toast("Welcome to Boolify!", {
        icon: "😎",
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, user, error, isPending, isSuccess };
}
