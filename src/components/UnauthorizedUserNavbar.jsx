import NavLink from "./NavLink";

export default function UnauthorizedUserNavbar() {
  return (
    <nav className="flex gap-3">
      <NavLink type="primary" currentTab="/signup" to="signup">
        Sign up
      </NavLink>

      <NavLink type="primary" currentTab="/login" to="login">
        Login
      </NavLink>

      <NavLink type="primary" currentTab="/books" to="books">
        Books
      </NavLink>
    </nav>
  );
}
