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

export default function UsersTable() {
  const { data, isLoading } = useUsers();

  return (
    <div className="p-4">
      {!isLoading ? (
        <>
          <Table>
            <caption className="font-lg m-2">Users</caption>
            <TableHead>
              <TableRow className="dark:bg-gray-600 dark:text-white">
                <TableHeaderCell>ID</TableHeaderCell>
                <TableHeaderCell>Role</TableHeaderCell>
                <TableHeaderCell>E-mail</TableHeaderCell>
                <TableHeaderCell>Name</TableHeaderCell>
                <TableHeaderCell>Current loan</TableHeaderCell>
                <TableHeaderCell>Register date</TableHeaderCell>
                <TableHeaderCell>Updated at</TableHeaderCell>
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
                  <TableDataCell className="px-1">
                    <Button type="table">
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
