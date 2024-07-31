import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobile-sidebar"

export const Navbar = () => {
    return (
      <div className="p-4 border-b h-full flex items-center shadow-sm  bg-[#03346E]">
        <MobileSidebar />
        <NavbarRoutes />
      </div>
    );
}