import { MdDeleteOutline } from "react-icons/md";
import { useUsers } from "./useUsers";
import Table from "../../components/Table";
import TableHead from "../../components/TableHead";
import TableBody from "../../components/TableBody";
import TableRow from "../../components/TableRow";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { formatDate } from "../../utils/helpers";
import TableDataCell from "../../components/TableDataCell";
import TableHeaderCell from "../../components/TableHeaderCell";
import { useDeleteUser } from "./useDeleteUser";

export default function UsersTable() {
  const { data, isLoading } = useUsers();

  const { mutate: deleteUser, isPending } = useDeleteUser();

  return (
    <div className="p-4">
      {!isLoading || !isPending ? (
        <>
          <Table>
            <caption className="m-2 text-lg">Users</caption>
            <TableHead>
              <TableRow className="dark:bg-gray-600 dark:text-white">
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>E-mail</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Current loan</TableHeaderCell>
                <TableHeaderCell>Register date</TableHeaderCell>
                <TableHeaderCell>Updated at</TableHeaderCell>
                <TableHeaderCell>Active</TableHeaderCell>
                <TableHeaderCell>Delete</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((user) => (
                <TableRow
                  className="border-2 transition-all duration-200 hover:bg-emerald-300 hover:underline"
                  key={user._id}
                >
                  <TableDataCell>{user._id}</TableDataCell>
                  <TableDataCell>{user.role}</TableDataCell>
                  <TableDataCell>{user.email}</TableDataCell>
                  <TableDataCell>{user.name}</TableDataCell>
                  <TableDataCell>
                    {user.currentBorrowedBookId || <span>None</span>}
                  </TableDataCell>
                  <TableDataCell>{formatDate(user.createdAt)}</TableDataCell>
                  <TableDataCell>{formatDate(user.updatedAt)}</TableDataCell>
                  <TableDataCell>
                    {user.isActive ? (
                      <span className="font-bold text-green-500">Yes</span>
                    ) : (
                      <span className="font-bold text-red-500">No</span>
                    )}
                  </TableDataCell>
                  <TableDataCell className="px-1">
                    <Button
                      disabled={!user.isActive}
                      onClick={() => deleteUser(user._id)}
                      type="table"
                    >
                      <MdDeleteOutline />
                    </Button>
                  </TableDataCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
