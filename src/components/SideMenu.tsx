import { ReactNode, useState } from "react";
import Sidebar from "react-sidebar";

import { SideMenuWrapper } from "../style/styled-components";


interface SideMenuProps {
  positionToRight: boolean, children: ReactNode
}

const SideMenu = ({ positionToRight, children }: SideMenuProps) => {
  const [sideMenuToggle, setSideMenuToggle] = useState<boolean>(false);
  const [sideMenuToggleDist, setSideMenuToggleDist] = useState<number>(0);

  const sideMenuTogglehandler = () => {
    setSideMenuToggle((prevState) => !prevState);
    setSideMenuToggleDist((prevState) =>
      prevState === 0 ? (positionToRight ? -120 : 120) : 0
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
      inset: `50% 0px 0px ${positionToRight ? "auto" : "0px"}`,
      width: "90px",
      height: "50px",
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
      <button onClick={sideMenuTogglehandler}>Open {positionToRight ? "Enemy" : "Player"}</button>
    </Sidebar>
  );
};

export default SideMenu;
