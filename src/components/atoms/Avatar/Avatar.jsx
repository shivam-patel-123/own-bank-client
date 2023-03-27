import { AvatarWrapper, Image } from "./Avatar";

const Avatar = ({ width, src, roundedRectangle = false }) => {
    return (
        <AvatarWrapper>
            <Image roundedRectangle={roundedRectangle} width={width} src={src} alt="" />
        </AvatarWrapper>
    );
};

export default Avatar;
