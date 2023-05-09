import Sidebar from "react-sidebar";
import { useState } from "react";

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
      sidebar={<b>Sidebar content</b>}
      open={sideMenuToggle}
      onSetOpen={sideMenuTogglehandler}
      styles={{
        root: {
          position: "relative",
        },
        sidebar: { background: "white", position: "fixed" },
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
