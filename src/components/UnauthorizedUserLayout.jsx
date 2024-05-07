import { Outlet } from "react-router-dom";
import Header from "./Header";
import UnauthorizedUserNavbar from "./UnauthorizedUserNavbar";
import UnauthorizedUserMain from "./UnauthorizedUserMain";
import Footer from "./Footer";

export default function UnauthorizedUserLayout() {
  return (
    <div className="grid h-dvh grid-rows-[1fr_4fr_.5fr]">
      <div className="flex items-center justify-evenly border border-slate-200 text-center">
        <Header />
        <UnauthorizedUserNavbar />
      </div>
      <UnauthorizedUserMain>
        <Outlet />
      </UnauthorizedUserMain>
      <Footer>Hello from the footer</Footer>
    </div>
  );
}
