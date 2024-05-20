import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCookies } from "react-cookie";
import { useCurrentUser } from "../features/users/useCurrentUser";
import SmallSpinner from "./SmallSpinner";

export default function AdminRoutes({ children }) {
  const { currentUser, isLoading, isSuccess } = useCurrentUser();
  const { user, setUser, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const [cookies] = useCookies();

  useEffect(
    function () {
      if (!cookies.token) navigate("/login");

      if (user?.role !== "admin" && cookies.token) navigate("/availablebooks");

      if (isLoading) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }

      if (isSuccess) setUser(currentUser.data);
    },
    [
      currentUser,
      isSuccess,
      setUser,
      navigate,
      cookies.token,
      isLoading,
      setIsLoading,
      user?.role,
    ],
  );

  if (isLoading || !user) <SmallSpinner />;

  return children;
}
