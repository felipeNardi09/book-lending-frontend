import DeleteUser from "./DeleteUser";
import UpdatePassword from "./UpdatePassword";
import UpdateUserForm from "./UpdateUserForm";

export default function EditUser() {
  return (
    <div>
      <UpdateUserForm />
      <UpdatePassword />
      <DeleteUser />
    </div>
  );
}
