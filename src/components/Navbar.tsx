import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "../style/styled-components";
import { useIsMobile } from "../utils/hooks/useBreakpoint";
// import { ChangeEvent } from "react";

interface Link {
    name: string,
    to: string
}

const Navbar = ({ setIsNavExpanded }: { setIsNavExpanded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const isMobile = useIsMobile();
    const activeClassName = "active";

    const navbarItems: Link[] = [
        { name: "Home", to: "/kanto" },
        { name: "overview", to: "overview" },
        { name: "single", to: "single" },
        // { name: "contact", to: "/contact" },
    ];

    const expandNavHandler = () => {
        if (!isMobile) {
            return;
        }
        setIsNavExpanded((e: boolean) => !e);
    };

    return (
        <NavbarWrapper>
            <ul>
                {navbarItems.map((item) => {
                    return (
                        <li key={`navbar-${item.name}`} onClick={expandNavHandler}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : undefined
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </NavbarWrapper>
    );
};

export default Navbar;