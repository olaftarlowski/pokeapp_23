
import { Link, useLocation } from "react-router-dom";
import { BackButtonWrapper } from "../../style/styled-components";
import { useContext } from "react";
import { PokeListContext } from "../../store/AppContext";

const BackButton = () => {
    const { pageNumberUserWasAt } = useContext(PokeListContext);

    const location = useLocation();
    const currentPath = location.pathname;
    const parts = currentPath.split('/');
    parts.pop();
    const toPath = parts.join('/');

    return (
        <BackButtonWrapper>
            <Link to={toPath + `?page=${pageNumberUserWasAt}`}>Back</Link>
        </BackButtonWrapper>
    );
};

export default BackButton;
