import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../..";
import { switchAccountStart } from "../../../redux/user/user.reducer";
import { AvatarListWrapper, AvatarWrapper } from "./AvatarList";

const AvatarList = ({ avatars }) => {
    const loggedInAccount = useSelector((state) => state.user.account.accountNumber);
    const dispatch = useDispatch();

    return (
        <AvatarListWrapper>
            {avatars?.map(({ accountNumber, profilePicture }) => {
                return (
                    <AvatarWrapper
                        onClick={(e) => {
                            dispatch(switchAccountStart({ accountNumber }));
                        }}
                        key={accountNumber}
                        active={accountNumber === loggedInAccount}
                    >
                        <Avatar src={profilePicture} width="36px" />
                    </AvatarWrapper>
                );
            })}
        </AvatarListWrapper>
    );
};

export default AvatarList;
