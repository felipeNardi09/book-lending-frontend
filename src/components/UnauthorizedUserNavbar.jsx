import NavLink from "./NavLink";

export default function UnauthorizedUserNavbar() {
  return (
    <nav className="flex gap-3">
      <NavLink type="navbar" currentTab="/signup" to="signup">
        Sign up
      </NavLink>

      <NavLink type="navbar" currentTab="/login" to="login">
        Login
      </NavLink>

      <NavLink type="navbar" currentTab="/books" to="books">
        Books
      </NavLink>
    </nav>
  );
}
