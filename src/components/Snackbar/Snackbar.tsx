import { SnackbarItem } from "./";

interface SnackbarProps {
    isSnackbarActive: boolean,
    setIsSnackbarActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Snackbar = ({ isSnackbarActive, setIsSnackbarActive }: SnackbarProps) => {
    return (
        <>
            {isSnackbarActive && (
                <SnackbarItem
                    setSnackbar={setIsSnackbarActive}
                    toFadeOut={4000}
                    position="top-right"
                />
            )}
        </>
    );
};

export default Snackbar;