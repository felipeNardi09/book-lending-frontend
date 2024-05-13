import { IoLogOutOutline, IoBookSharp } from "react-icons/io5";
import { RiEdit2Line } from "react-icons/ri";

import { useAuth } from "../contexts/AuthContext";
import { useLogout } from "../features/auth/useLogout";
import Button from "./Button";
import NavLink from "./NavLink";
import Title from "./Title";
import SmallSpinner from "./SmallSpinner";

export default function AuthorizedNavbar() {
  const { logout, isPending } = useLogout();

  const { user, setUser, isLoading } = useAuth();

  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-4 flex flex-col justify-center gap-4">
      <Title />
      <div className="text-center">
        {!isLoading ? (
          <h2>Welcome, {user?.name.split(" ")[0]}</h2>
        ) : (
          <SmallSpinner />
        )}
      </div>
      <NavLink
        type="secondary"
        currentTab="/availablebooks"
        to="availablebooks"
      >
        <span>
          <IoBookSharp />
        </span>
        <span className="ml-1">Borrow a book</span>
      </NavLink>
      <NavLink type="secondary" currentTab="/your-books" to="your-books">
        <span>
          <IoBookSharp />
        </span>
        <span className="ml-1">Your books</span>
      </NavLink>
      <NavLink type="secondary" currentTab="/edit" to="edit">
        <span>
          <RiEdit2Line size="1.2em" />
        </span>
        <span className="ml-1">Edit your profile</span>
      </NavLink>
      <Button
        type="primary"
        onClick={() => {
          setUser(null);
          logout();
        }}
      >
        {!isPending ? (
          <>
            <span>
              <IoLogOutOutline size="1.2em" />
            </span>
            <span className="ml-1">Log out</span>
          </>
        ) : (
          <SmallSpinner />
        )}
      </Button>
    </div>
  );
}
