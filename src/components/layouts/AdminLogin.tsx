import { Link } from 'react-router-dom';

export const AdminLogin = () => {
	return (
		<div className="w-full h-screen bg-gradient-to-r from-green-300 to-green-700">
			<div className="w-full h-full flex flex-col justify-center items-center">	
				<div className='bg-white p-8 rounded-md w-1/4 mt-8'>

					<div className="text-center">	
						<p className="text-2xl uppercase font-bold mb-8">Hi Admin!</p>

						<form className='w-80 mx-auto'>
							<div className="mb-4">
								<label className="text-left block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
									Username
								</label>
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="username"
									type="text"
									placeholder="Username"
								/>
							</div>
							<div className="mb-6">
								<label className="text-left block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
									Password
								</label>
								<input
									className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="password"
									type="password"
									placeholder="******************"	
								/>
							</div>
							<div className="flex items-center justify-center">
								<Link
									className="bg-green-500 w-2/3 hover:bg-green-700 text-white uppercase text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
									type="button" to={'/'}								>
									Login
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}