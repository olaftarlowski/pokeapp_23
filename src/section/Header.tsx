import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import { Collapse } from "react-collapse";

import { Navbar } from "../components";
import { useIsMobile } from "../utils/hooks/useBreakpoint";
import { HeaderWrapper } from "../style/styled-components"

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = useState<number>(90);
    const isMobile: boolean = useIsMobile();
    const headerRef = useRef<HTMLElement>(null);

    const expandMenuHandler = () => {
        setIsNavExpanded(!isNavExpanded);
        setTimeout(() => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.clientHeight);
            }
        }, 1);
    };

    const navbarDesk = <Navbar setIsNavExpanded={setIsNavExpanded} />;

    const navbarMobile = (
        <Collapse isOpened={isNavExpanded}>
            <Navbar setIsNavExpanded={setIsNavExpanded} />
        </Collapse>
    );

    return (
        <HeaderWrapper ref={headerRef}
        height={headerHeight}
        >
            <div className="header__content">
                <div className="logosDIV">
                    {/* <Logo /> */}
                    <div>Logo {headerHeight}</div>
                    {isMobile && (
                        <Hamburger toggled={isNavExpanded} toggle={expandMenuHandler} />
                    )}
                </div>
                {isMobile ? navbarMobile : navbarDesk}
            </div>
        </HeaderWrapper>
    );
};

export default Header;