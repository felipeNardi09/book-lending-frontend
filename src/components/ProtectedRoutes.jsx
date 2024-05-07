/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/users/useCurrentUser";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import SmallSpinner from "./SmallSpinner";

export default function ProtectedRoutes({ children }) {
  const { currentUser, isLoading, isSuccess } = useCurrentUser();
  const { user, setUser, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const [cookies] = useCookies();

  useEffect(
    function () {
      if (!cookies.token) navigate("/login");

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
    ],
  );

  if (isLoading || !user) <SmallSpinner />;

  return children;
}
