import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './components/section/Dashboard.tsx'
import { User } from './components/section/User.tsx'

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
				element: <User />
			}
		],
		
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
