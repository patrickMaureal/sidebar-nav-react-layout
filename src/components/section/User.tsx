import { UserModel, getColumns } from "../../pages/user/columns";
import { DataTable } from "../../pages/user/data-table";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "../ui/buttons";

interface UserProps {
  data: UserModel[];
  setData: (data: UserModel[]) => void;
}

export default function User(props: UserProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

	//Create Function
	const createUser = async () => {
		try {
			const newId = props.data.length > 0 ? props.data[props.data.length - 1].id + 1 : 1;
			const response = await axios.post(
				"https://fakerestapi.azurewebsites.net/api/v1/Users",
				{
					id: newId,
					username,
					password,
				}
			);
			props.setData([...props.data, response.data]);
			setUsername("");
			setPassword("");
		} catch (error) {
			console.error("Error creating user:", error);
		}
	};

	//Delete Function
	const deleteUser = async (id: number) => {
		try {
			await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Users/${id}`);
			props.setData(props.data.filter((user) => user.id !== id));
		} catch (error) {
			console.error("Error deleting user:", error);
		}
	};

  return (
    <section className="p-8 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Users Management
      </h1>
      <div className="flex flex-row items-center justify-between">
        <Link to="/users/create">
					<Button variant={"default"} className="mr-2">
						Create User
					</Button>
				</Link>
      </div>

      <div className="container mx-auto mt-10">
				{/* Pass Data to DataTable and columns */}
				<DataTable columns={getColumns(deleteUser)} data={props.data} />
      </div>
    </section>
  );
}


// get Data from API
async function fetchData(): Promise<UserModel[]> {
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

	// Refreshing State of Data from API
  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <User data={data} setData={setData} />;
}
