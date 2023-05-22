import { ReactNode, useState } from "react";
import Sidebar from "react-sidebar";

import { SideMenuWrapper } from "../../style/styled-components";
import { ArrowOpen } from "../common/ArrowOpen";


interface SideMenuProps {
  positionToRight: boolean, children: ReactNode
}

const SideMenu = ({ positionToRight, children }: SideMenuProps) => {
  const [sideMenuToggle, setSideMenuToggle] = useState<boolean>(false);
  const [sideMenuToggleDist, setSideMenuToggleDist] = useState<number>(0);

  const sideMenuTogglehandler = () => {
    setSideMenuToggle((prevState) => !prevState);
    setSideMenuToggleDist((prevState) =>
      prevState === 0 ? (positionToRight ? -150 : 150) : 0
    );
  };

  const sidebarStyles = {
    root: {
      position: "relative"
    },
    sidebar: {
      position: "fixed",
      height: "80%",
      top: "10%"
    },
    content: {
      position: "fixed",
      inset: `calc(50% - 60px) 0px 0px ${positionToRight ? "auto" : "0px"}`,
      width: "40px",
      transform: `translateX(${sideMenuToggleDist}px)`,
      transition: "transform 0.3s ease-out 0s",
      zIndex: "100"
    },
    overlay: {
      display: "none"
    }
  };

  return (
    <Sidebar
      sidebar={<SideMenuWrapper>{children}</SideMenuWrapper>}
      open={sideMenuToggle}
      onSetOpen={sideMenuTogglehandler}
      pullRight={positionToRight}
      styles={sidebarStyles}
    >
      <ArrowOpen
        toggle={sideMenuTogglehandler}
        sideMenuToggle={sideMenuToggle}
        arrowToRight={positionToRight} />
    </Sidebar>
  );
};

export default SideMenu;
