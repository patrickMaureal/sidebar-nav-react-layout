import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import profile from "../assets/logo (2).png";
import { createContext, useState } from "react";
import { SidebarData } from "./shared/ui/sidebar/SidebarData";
import SidebarItem from "./shared/ui/sidebar/SidebarItems";

interface SidebarContext {
  expanded: boolean;
}

const SidebarContext = createContext<SidebarContext>({ expanded: false });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      <aside className="h-100">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-end items-center">
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 pt-8">
              {SidebarData.map((item) => (
                <SidebarItem key={item.title} item={item} />
              ))}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Barangay Account</h4>
                <span className="text-xs text-gray-600">
                  barangayaccount@example.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export { SidebarContext };
