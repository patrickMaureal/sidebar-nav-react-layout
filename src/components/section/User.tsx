import { UserModel, columns } from "../../pages/user/columns";
import { DataTable } from "../../pages/user/data-table";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
	DialogFooter,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

interface UserProps {
  data: UserModel[];
}

export default function User(props: UserProps) {
  return (
    <section className="p-8 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Users Management
      </h1>
      <div className="flex flex-row items-center justify-between">
        <Dialog>
          <DialogTrigger className="p-4 rounded-lg bg-green-500 hover:bg-green-700 font-bold text-white">Create User</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create User</DialogTitle>
              <DialogDescription>
                <form action="" className="w-80 mx-auto mt-8">
									<div className="mb-4">
										<label className="text-left block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
											Username
										</label>
										<input
											className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
											id="username"
											type="text"
											placeholder="Username"
										/>

										<label className="text-left block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
											Password
										</label>
										<input
											className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
											id="password"
											type="text"
											placeholder="Password"
										/>
									</div>
								</form>
              </DialogDescription>
            </DialogHeader>
						<DialogFooter>
							<DialogClose className="p-4 rounded-lg bg-red-300 hover:bg-red-500">Cancel</DialogClose>
							<DialogClose className="p-4 rounded-lg bg-green-300 hover:bg-green-500">Confirm</DialogClose>
						</DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="container mx-auto mt-10 bg-white">
        <DataTable columns={columns} data={props.data} />
      </div>
    </section>
  );
}

async function fetchData(): Promise<UserModel[]> {
  // Fetch data from your API here.
  try {
    const response = await axios.get(
      "https://fakerestapi.azurewebsites.net/api/v1/Users"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return empty array in case of an error
  }
}

export function UserWithData() {
  const [data, setData] = useState<UserModel[]>([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <User data={data} />;
}
