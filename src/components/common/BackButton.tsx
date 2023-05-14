
import { Link, useLocation } from "react-router-dom";
import { BackButtonWrapper } from "../../style/styled-components";

const BackButton = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const parts = currentPath.split('/');
    parts.pop();
    const toPath = parts.join('/');

    return (
        <BackButtonWrapper>
            <Link to={toPath}>Back</Link>
        </BackButtonWrapper>
    );
};

export default BackButton;
