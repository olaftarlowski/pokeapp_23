import Sidebar from "react-sidebar";
import { useState } from "react";



import styled from "styled-components";

interface SideMenuWrapperProps {
  sideMenuToggleDist: number;
}

const SideMenuWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100%;
`;

const SideMenu = () => {
  const [sideMenuToggle, setSideMenuToggle] = useState<boolean>(false);
  const [sideMenuToggleDist, setSideMenuToggleDist] = useState<number>(0);

  const sideMenuTogglehandler = () => {
    setSideMenuToggle((e) => !e);
    if (!sideMenuToggle) {
      setSideMenuToggleDist(120);
    } else {
      setSideMenuToggleDist(0);
    }
  };

  return (
    <Sidebar
      sidebar={<SideMenuWrapper>asdadasdas <div>Sidebar content</div></SideMenuWrapper>}
      open={sideMenuToggle}
      onSetOpen={sideMenuTogglehandler}
      // pullRight={true}
      styles={{
        root: {
          position: "relative",
        },
        sidebar: { position: "fixed", height: "80%", top: "10%", },
        content: {
          position: "fixed",
          inset: `50% 0px 0px 0px`,
          width: "90px",
          height: "50px",
          transform: `translateX(${sideMenuToggleDist}px)`,
          transition: "transform 0.3s ease-out 0s",
        },
        overlay: {
          display: "none",
        },
      }}
    >
      <button onClick={sideMenuTogglehandler}>Open sidebar</button>
    </Sidebar>
  );
};

export default SideMenu;
