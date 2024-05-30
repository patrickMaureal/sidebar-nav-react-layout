import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/buttons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UserModel = {
  id: number;
  userName: string;
  password: string;
};

// Define prop for passing the function
export interface ColumnProps {
  deleteUser: (id: number) => void;
}

export function getColumns(
  // add Props from passed function
  deleteUser: ColumnProps["deleteUser"]
): ColumnDef<UserModel>[] {
  return [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "userName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Username
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
    {
      accessorKey: "password",
      header: "Password",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const user = row.original;

        return (
          <div className="flex w-10">
						<Link to={"/users/edit/" + user.id}>
							<Button variant="default" className="mr-2">Edit User</Button>
						</Link>
            <Dialog>
              <DialogTrigger>
                <Button variant="destructive">Delete User</Button>
              </DialogTrigger>
              <DialogPortal>
                <DialogContent>
                  <DialogTitle>
                    Are you sure you want to delete this user?
                  </DialogTitle>
                  <DialogDescription>
                    This action cannot be undone.
                  </DialogDescription>
                  {/* Execute deleteUser function from User onClick */}
                  <DialogClose asChild>
                    <Button
                      variant="destructive"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </DialogClose>
                </DialogContent>
              </DialogPortal>
            </Dialog>
          </div>
        );
      },
    },
  ];
}
