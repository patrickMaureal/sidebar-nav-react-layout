import { Bell, UserCircle } from "lucide-react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="flex items-center justify-between h-20 bg-white border-b shadow-sm pr-10">
				<div className="relative">
					<img src={logo} className="overflow-hidden transition-all w-30 h-20" />

				</div>

        <ul className="flex items-center gap-4">
          <li>
            <Bell size={20} />
          </li>
          <li>
            <UserCircle size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
};
