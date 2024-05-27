import { LayoutDashboard, Home,SquareUser, Warehouse, Notebook, Landmark, Users2Icon, UserSearch, UserCog2 } from "lucide-react";
import Sidebar from "./components/Sidebar";
import { SidebarItem } from "./components/shared/ui/sidebar/SidebarItems";

import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" alert />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<SquareUser size={20} />} text="Resident Profiling" alert />
          <SidebarItem icon={<Warehouse size={20} />} text="Sitios" />
          <SidebarItem icon={<Notebook size={20} />} text="Interviewer Profiling" />
          <SidebarItem icon={<Landmark size={20} />} text="Officials" />
          <SidebarItem icon={<Users2Icon size={20} />} text="Families" />
          <SidebarItem icon={<Home size={20} />} text="Households" />
          <SidebarItem icon={<UserSearch size={20} />} text="Users" />
          <SidebarItem icon={<UserCog2 size={20} />} text="Account Settings" />
        </Sidebar>
				<Navbar />
      </div>
    </>
  );
}

export default App;