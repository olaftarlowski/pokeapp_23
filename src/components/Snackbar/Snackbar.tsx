import { SnackbarItem } from "./";

interface SnackbarProps {
    isSnackbarActive: boolean,
    setIsSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>
    message?: string;
}

const Snackbar = ({ isSnackbarActive, setIsSnackbarActive, message }: SnackbarProps) => {
    const toFade = 4000;

    return (
        <>
            {isSnackbarActive && (
                <SnackbarItem
                    setSnackbar={setIsSnackbarActive}
                    toFadeOut={toFade}
                    position="top-right"
                    message={message}
                />
            )}
        </>
    );
};

export default Snackbar;