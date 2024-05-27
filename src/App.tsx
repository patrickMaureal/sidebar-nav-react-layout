import Sidebar from "./components/Sidebar";

import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
