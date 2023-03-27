import { useSelector } from "react-redux";
import { Icon, NavigationLink, ProfileCard } from "../../";
import path from "../../../constants/path";
import { LogoWrapper, NavigationContainer, NavigationLinks, NavSection } from "./Navigation";

const Navigation = () => {
    const account = useSelector((state) => state.user.account);

    return (
        <NavigationContainer>
            <NavSection>
                <LogoWrapper>
                    <Icon name="logo" />
                </LogoWrapper>
            </NavSection>
            <NavSection>
                <ProfileCard data={account} />
            </NavSection>
            <NavSection>
                <NavigationLinks>
                    <NavigationLink icon="summary" text="Bank Summary" to={path.SUMMARY} />
                    <NavigationLink icon="accounts" text="All accounts" to={path.ACCOUNTS}>
                        <div>12</div>
                    </NavigationLink>
                    <NavigationLink icon="instalments" text="All Instalments" to={path.INSTALMENTS} />
                    <NavigationLink icon="announcements" text="Announcements" to={path.ANNOUNCEMENTS} />
                </NavigationLinks>
            </NavSection>
        </NavigationContainer>
    );
};

export default Navigation;
