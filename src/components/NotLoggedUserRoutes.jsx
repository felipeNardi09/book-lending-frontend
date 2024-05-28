/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../features/users/useCurrentUser";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import SmallSpinner from "./SmallSpinner";

export default function NotLoggedUserRoutes({ children }) {
  const { currentUser, isLoading, isSuccess } = useCurrentUser();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [cookies] = useCookies();
  console.log(user);

  useEffect(
    function () {
      if (cookies.token) {
        if (user?.role === "admin") {
          navigate("/booksDashboard");
        } else {
          navigate("/availablebooks");
        }
      } else {
        setUser(null);
      }
    },
    [user, currentUser, isSuccess, setUser, navigate, cookies.token, isLoading],
  );

  if (isLoading || !user) <SmallSpinner />;

  return children;
}
