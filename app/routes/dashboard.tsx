import { Outlet } from "@remix-run/react";
import DashboardSidebar from "~/components/dashboard/sidebar";
import useDashboard from "~/hooks/dashboard/use-dashboard";

export default function Dashboard() {
    const { sidebarMenus } = useDashboard();

    return (
        <div className="flex w-full h-screen">
            <DashboardSidebar sidebarMenus={sidebarMenus} />
            <div className="h-screen grow overflow-y-auto bg-white p-4">
                <Outlet />
            </div>
        </div>
    );
}
