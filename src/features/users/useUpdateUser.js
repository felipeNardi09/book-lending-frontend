import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiUsers";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const [cookies] = useCookies("jwt");

  const {
    mutate,
    data: user,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      return updateUser(cookies.token, data);
    },
    onSuccess: () => {
      toast.success("User has been updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, user, error, isPending, isSuccess };
}
