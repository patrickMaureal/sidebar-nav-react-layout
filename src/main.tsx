import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './components/section/Dashboard.tsx'
import { UserWithData }  from '@/components/section/User.tsx'
import { Login } from './components/layouts/Login.tsx'
import { AdminLogin } from './components/layouts/AdminLogin.tsx'
import { EditUser } from './pages/user/edit.tsx'
import { CreateUser } from './pages/user/create.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "/users",
        element: <UserWithData />
      },
			{
				path:"/users/create",
				element: <CreateUser />
			},
			{
				path:"/users/edit/:id",
				element: <EditUser />
			}
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
	{
    path: "/admin-login",
    element: <AdminLogin />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)