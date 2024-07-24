import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"

export const Sidebar = () => {
    return (
      <div className="h-full border-r flex flex-col overflow-y-auto bg-[#eaebed] shadow-sm">
        <div className="py-1 px-8">
          <Logo />
        </div>

        <div className="flex flex-col w-full">
          <SidebarRoutes />
        </div>
      </div>
    );
}