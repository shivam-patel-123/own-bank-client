import styled from "styled-components";

export const AvatarWrapper = styled.div`
    overflow: hidden;
    aspect-ratio: 1 / 1;
`;

export const Image = styled.img`
    aspect-ratio: 1 / 1;
    width: ${({ width }) => (width ? width : "4rem")};
    object-fit: cover;
    /* border-radius: 50%; */
    border-radius: ${({ roundedRectangle }) => (roundedRectangle ? "16%" : "50%")};
`;
