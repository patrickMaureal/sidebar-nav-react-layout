import { Link } from "react-router-dom";

export const UserCreate = () => {
	return (
		<section className="p-8 bg-gray-100 h-full">
			<h1 className="text-2xl font-bold mb-4 text-gray-800">
				Create User
			</h1>
			<div className="flex flex-row items-center justify-between">
				<Link
					to={"/users"}
					className={`p-4 rounded-lg bg-green-300 hover:bg-green-500`}
				>
					<span className="text-md font-semibold">Back</span>
				</Link>
			</div>
		</section>
	);
}