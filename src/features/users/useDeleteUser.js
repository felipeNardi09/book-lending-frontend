import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserById } from "../../services/apiUsers";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

export function useDeleteUser() {
  const [cookies] = useCookies("jwt");
  const queryClient = useQueryClient();
  const {
    mutate,
    data: user,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      return deleteUserById(cookies.token, data);
    },
    onSuccess: (data) => {
      console.log(data);

      queryClient.invalidateQueries("users");

      toast(`${data.user.name} is now inactive`, {
        style: { border: "2px solid yellow" },
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, user, error, isPending, isSuccess };
}
