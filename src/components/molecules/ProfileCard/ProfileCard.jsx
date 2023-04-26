import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Icon } from "../..";
import { logoutStart } from "../../../redux/user/user.reducer";
import { HeadingH4, SmallText2 } from "../../../styles/utils/Headings.style";
import { ActionButton, ActionButtons, LogoutButton, ProfileCardWrapper, ProfileDetails } from "./ProfileCard";

const ProfileCard = ({ data }) => {
    const { profilePicture, accountName, accountNumber } = data;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <ProfileCardWrapper>
            <Avatar src={profilePicture} width="72px" />
            <ProfileDetails>
                <HeadingH4>{accountName}</HeadingH4>
                <SmallText2>{accountNumber}</SmallText2>
            </ProfileDetails>
            <ActionButtons>
                <ActionButton>
                    <Icon name="setting" />
                </ActionButton>
                <LogoutButton
                    onClick={(e) => {
                        dispatch(logoutStart());
                        navigate("/login", { replace: true });
                    }}
                >
                    <Icon name="logout" />
                </LogoutButton>
            </ActionButtons>
        </ProfileCardWrapper>
    );
};

export default ProfileCard;
