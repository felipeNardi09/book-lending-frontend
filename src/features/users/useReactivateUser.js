import { useMutation } from "@tanstack/react-query";
import { reactivateAccount } from "../../services/apiUsers";
import toast from "react-hot-toast";

export function useReactivateUser() {
  const {
    mutate,
    data: user,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      return reactivateAccount(data);
    },
    onSuccess: () => {
      toast.success("You can now log in");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, user, error, isPending, isSuccess };
}
