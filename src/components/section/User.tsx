import { Link } from "react-router-dom";
import { Payment, columns } from "../../pages/user/columns";
import { DataTable } from "../../pages/user/data-table"
import { useState, useEffect } from "react";

interface UserProps {
  data: Payment[]
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

async function fetchData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export function UserWithData() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <User data={data} />;
}