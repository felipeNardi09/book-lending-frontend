import { Outlet } from "react-router-dom";
import AuthorizedUserMain from "./AuthorizedUserMain";
import AuthorizedNavbar from "./AuthorizedNavbar";

export default function AuthorizedUserLayout() {
  return (
    <div className="grid h-dvh grid-cols-[1fr_2.5fr_2.5fr] grid-rows-[1fr_1fr_1fr]">
      <AuthorizedNavbar />
      <AuthorizedUserMain>
        <Outlet />
      </AuthorizedUserMain>
    </div>
  );
}
