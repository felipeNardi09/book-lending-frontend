import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../../services/apiUsers";
import { useCookies } from "react-cookie";

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
      console.log(data);

      return updateUser(cookies.token, data);
    },
    onSuccess: () => {},
    onError: (error) => {
      console.log(error);
    },
  });

  return { mutate, user, error, isPending, isSuccess };
}
