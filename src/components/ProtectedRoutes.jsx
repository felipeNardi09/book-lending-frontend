/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../features/users/useCurrentUser";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import SmallSpinner from "./SmallSpinner";

const userRoutes = ["/availaboebooks", "/your-books", "/edit"];
const adminRoutes = ["/booksDashboard", "/usersDashboard", "/loansDashboard"];

export default function ProtectedRoutes({ children }) {
  const { currentUser, isPending } = useCurrentUser();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies();

  useEffect(
    function () {
      if (!cookies.token) {
        setUser(null);
        navigate("/login");
      }

      if (!isPending) {
        setUser(currentUser?.data);
      }

      if (
        currentUser?.data.role === "admin" &&
        !adminRoutes.includes(location.pathname)
      ) {
        navigate("/booksDashboard");
      }

      if (
        currentUser?.data.role === "user" &&
        !userRoutes.includes(location.pathname)
      ) {
        navigate("/availablebooks");
      }
    },
    [
      user,
      currentUser,
      setUser,
      navigate,
      isPending,
      cookies.token,
      cookies.iat,
      setCookie,
      location.pathname,
    ],
  );

  if (isPending || !user) <SmallSpinner />;

  return children;
}
