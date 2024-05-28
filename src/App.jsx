import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Books from "./pages/Books";
import LoggedUserInformation from "./pages/LoggedUserInformation";
import EditProfile from "./pages/EditProfile";
import AvailableBooks from "./pages/AvailableBooks";
import BooksDashboard from "./pages/BooksDashboard";
import UsersDashboard from "./pages/UsersDashboard";
import LoansDashboard from "./pages/LoansDashboard";

import UnauthorizedUserLayout from "./components/UnauthorizedUserLayout";
import AuthorizedUserLayout from "./components/AuthorizedUserLayout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotLoggedUserRoutes from "./components/NotLoggedUserRoutes";

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
              <Route path="availablebooks" element={<AvailableBooks />} />
              <Route path="your-books" element={<LoggedUserInformation />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="/booksDashboard" element={<BooksDashboard />} />
              <Route path="/usersDashboard" element={<UsersDashboard />} />
              <Route path="/loansDashboard" element={<LoansDashboard />} />
            </Route>

            <Route
              element={
                <NotLoggedUserRoutes>
                  <UnauthorizedUserLayout />
                </NotLoggedUserRoutes>
              }
            >
              <Route index element={<Navigate replace to="login" />} />
              <Route path="books" element={<Books />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{
            margin: "8px",
          }}
          toastOptions={{
            success: {
              duration: 3000,
              style: { border: "1px solid rgb(52 211 153)" },
            },
            error: {
              duration: 4000,
              style: { border: "1px solid red" },
            },
            style: {
              fontSize: "1em",
              maxWidth: "500px",
              padding: ".6em",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
