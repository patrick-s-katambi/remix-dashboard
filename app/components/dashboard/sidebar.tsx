import React from "react";
import SidebarLogo from "./logo";
import NavButton from "./nav-button";
import UserProfile from "./user-profile";

export type TNavButton = {
    Icon: React.ReactNode;
    label: string;
    routePath: string;
};

export type TNavButtonItems = TNavButton[];

const DashboardSidebar: React.FunctionComponent<{ sidebarMenus: TNavButtonItems }> = ({
    sidebarMenus,
}) => (
    <aside className="relative h-screen w-[250px] cursor-pointer py-4 bg-[whitesmoke] border-r border-r-gray-100 overflow-y-auto flex flex-col items-center gap-4">
        <SidebarLogo />

        <div className="w-full flex flex-col gap-2 max-h-[75vh] overflow-y-auto px-2">
            {sidebarMenus.map((props, index) => (
                <NavButton key={index} {...props} />
            ))}
        </div>

        <div className="px-2 w-full absolute bottom-4">
            <UserProfile email="andi@untitledui.com" username="Andi Lane" />
        </div>
    </aside>
);

export default DashboardSidebar;
