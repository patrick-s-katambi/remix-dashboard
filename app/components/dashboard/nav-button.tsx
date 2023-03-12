import { NavLink } from "@remix-run/react";
import { BsArrowRight } from "react-icons/bs";
import { TNavButton } from "./sidebar";

const NavButton: React.FunctionComponent<TNavButton> = (props) => (
    <NavLink
        to={props.routePath}
        className={({ isActive }) =>
            `${
                isActive ? "bg-gray-200 font-medium" : ""
            } flex items-center gap-4 justify-between group hover:bg-gray-200 p-2 rounded-lg`
        }
    >
        <div className="flex items-center gap-2">
            <p className="text-xl">{props.Icon}</p>
            <p className="text-sm">{props.label}</p>
        </div>
        <BsArrowRight className="group-hover:mr-2 transition-all" />
    </NavLink>
);

export default NavButton;
