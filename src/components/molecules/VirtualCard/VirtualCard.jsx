import { Avatar, Icon } from "../..";
import {
    AccountInfo,
    AccountName,
    AccountNumber,
    AvatarWrapper,
    BackgroundOutlineLogo,
    CreatedDate,
    OutlineLogoWrapper,
    RoleCaption,
    VirtualCardContainer,
    VirtualCardFooter,
    VirtualCardHeader,
    VirtualCardWrapper,
} from "./VirtualCard";

const VirtualCard = ({ account }) => {
    const { accountName, accountNumber, createdOn, accountRole, profilePicture } = account;

    const date = new Date(Date.parse(createdOn));
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <VirtualCardContainer>
            <VirtualCardWrapper>
                <VirtualCardHeader>
                    <AccountInfo>
                        <AvatarWrapper>
                            <Avatar roundedRectangle width="72px" src={profilePicture} />
                        </AvatarWrapper>
                        <div>
                            <AccountName>{accountName}</AccountName>
                            <RoleCaption>{accountRole}</RoleCaption>
                        </div>
                    </AccountInfo>
                    <Icon name="moreOptions" />
                </VirtualCardHeader>
                <AccountNumber>{accountNumber.replaceAll("-", " ")}</AccountNumber>
                <VirtualCardFooter>
                    <OutlineLogoWrapper>
                        <Icon name="logoOutline" />
                    </OutlineLogoWrapper>
                    <BackgroundOutlineLogo>
                        <Icon name="logoOutline" />
                    </BackgroundOutlineLogo>
                    <CreatedDate>
                        {month}/{year.toString().slice(-2)}
                    </CreatedDate>
                </VirtualCardFooter>
            </VirtualCardWrapper>
        </VirtualCardContainer>
    );
};

export default VirtualCard;
