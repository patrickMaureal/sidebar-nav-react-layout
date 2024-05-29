import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() =>
                    navigator.clipboard.writeText(user.id.toString())
                  }
                >
                  Copy user ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View user details</DropdownMenuItem>
                <DialogTrigger>
                  <DropdownMenuItem>Delete User</DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
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
        );
      },
    },
  ];
}
