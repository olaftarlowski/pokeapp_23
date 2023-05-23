import { useEffect } from "react";
import { SnackbarWrapper } from "../../style/styled-components"

interface SnackbarPropsItem {
    setSnackbar: (isActive: boolean) => void,
    toFadeOut: number
    position: string
}

const SnackbarItem = ({ setSnackbar, toFadeOut, position }: SnackbarPropsItem) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setSnackbar(false);
        }, toFadeOut);

        return () => clearTimeout(timer);
    }, [setSnackbar, toFadeOut]);

    return (
        <SnackbarWrapper className={`snackbar-wrapper-${position}`}>
            <span>Already in your team!</span>
        </SnackbarWrapper>
    );
};


export default SnackbarItem;