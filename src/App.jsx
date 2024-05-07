import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthorizedUserLayout from "./components/AuthorizedUserLayout";
import Books from "./pages/Books";

import EditProfile from "./pages/EditProfile";
import UnauthorizedUserLayout from "./components/UnauthorizedUserLayout";
import AvailableBooks from "./pages/AvailableBooks";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoggedUserInformation from "./pages/LoggedUserInformation";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoutes>
                  <AuthorizedUserLayout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Navigate replace to="books" />} />
              <Route path="availablebooks" element={<AvailableBooks />} />
              <Route path="your-books" element={<LoggedUserInformation />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>

            <Route element={<UnauthorizedUserLayout />}>
              <Route index element={<Navigate replace to="login" />} />
              <Route path="books" element={<Books />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
