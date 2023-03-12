import { FiHome, FiSettings } from "react-icons/fi";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { TNavButtonItems } from "~/components/dashboard/sidebar";

const useDashboard = (): { sidebarMenus: TNavButtonItems } => {
    return {
        sidebarMenus: [
            { Icon: <FiHome />, label: "Home", routePath: "home" },
            { Icon: <HiOutlineSquare3Stack3D />, label: "Projects", routePath: "projects" },
            { Icon: <FiSettings />, label: "Settings", routePath: "settings" },
        ],
    };
};

export default useDashboard;
