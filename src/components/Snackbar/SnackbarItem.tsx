import { useEffect } from "react";
import { SnackbarWrapper } from "../../style/styled-components"

interface SnackbarPropsItem {
    setSnackbar: (isActive: boolean) => void,
    toFadeOut: number,
    position: string,
    message?: string
}

const SnackbarItem = ({ setSnackbar, toFadeOut, position, message }: SnackbarPropsItem) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setSnackbar(false);
        }, toFadeOut);

        return () => clearTimeout(timer);
    }, [setSnackbar, toFadeOut]);

    const closeSnackbarHandler = () => {
        setSnackbar(false);
    }

    return (
        <SnackbarWrapper className={`snackbar-wrapper-${position}`}>
            <button className="button-close" onClick={closeSnackbarHandler}>X</button>
            <span>{message}</span>
        </SnackbarWrapper>
    );
};


export default SnackbarItem;