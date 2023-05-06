import { useState, useEffect, startTransition } from "react";
import { theme } from "../../style/defaultTheme";

const useBreakpoint = (breakpoint: number): boolean => {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      startTransition(() => {
        setIsBreakpoint(false);
      });
    }

    setIsBreakpoint(window?.innerWidth <= breakpoint);
    const handleResize = () => {
      startTransition(() => {
        setIsBreakpoint(window?.innerWidth <= breakpoint);
      });
    };
    window?.addEventListener("resize", handleResize);

    return () => {
      window?.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isBreakpoint;
};

const useIsDesktop = (): boolean => {
  return useBreakpoint(theme.breakpoints.desktop);
};

const useIsMobile = (): boolean => {
  return useBreakpoint(theme.breakpoints.mobile);
};

export { useIsDesktop, useIsMobile, useBreakpoint };
