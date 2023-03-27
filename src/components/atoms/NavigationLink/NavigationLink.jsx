import { useLocation } from "react-router-dom";
import Icon from "../Icon";
import { NavigationItemWrapper } from "./NavigationLink";

const NavigationLink = ({ icon, text, children, to }) => {
    const location = useLocation();

    const active = location.pathname === to ? "true" : undefined;

    return (
        <NavigationItemWrapper active={active} to={to}>
            <Icon name={icon} />
            <div className="navigation-item">{text}</div>
            {children}
        </NavigationItemWrapper>
    );
};

export default NavigationLink;
