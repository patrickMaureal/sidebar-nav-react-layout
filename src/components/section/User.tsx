import { Link } from "react-router-dom";
import { UserModel, columns } from "../../pages/user/columns";
import { DataTable } from "../../pages/user/data-table"
import { useState, useEffect } from "react";
import axios from "axios";

interface UserProps {
  data: UserModel[]
}

export default function User(props: UserProps) {
  return (
    <section className="p-8 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Users Management
      </h1>
      <div className="flex flex-row items-center justify-between">
        <Link
          to={"/users/create"}
          className={`p-4 rounded-lg bg-green-300 hover:bg-green-500`}
        >
          <span className="text-md font-semibold">Create User</span>
        </Link>
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
    const response = await axios.get("https://fakerestapi.azurewebsites.net/api/v1/Users");
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