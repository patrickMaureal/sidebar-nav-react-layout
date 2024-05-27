import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarContext } from "../../../Sidebar";

type SidebarItemProps = {
  item: { title: string; path: string; icon: JSX.Element };
};

const SidebarItem = ({ item }: SidebarItemProps) => {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname === item.path);
  }, [location.pathname, item.path]);

  return (
    <Link to={item.path} className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800" : "hover:bg-green-50 text-gray-600"}`}>
      {item.icon}
			<span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0 h-0"} ${expanded ? "text-gray-600" : "invisible opacity-0"}`}>{item.title}</span>
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-green-100 text-green-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {item.title}
        </div>
      )}
    </Link>
  );
};

export default SidebarItem;