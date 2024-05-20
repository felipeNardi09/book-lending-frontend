/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
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
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(
    function () {
      if (!user && !cookies.token) navigate("/login");

      if (user?.role === "admin") navigate("/booksDashboard");

      if (isLoading) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }

      if (isSuccess) setUser(currentUser.data);
    },
    [
      user,
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
