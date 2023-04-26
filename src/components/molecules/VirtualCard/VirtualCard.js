import styled from "styled-components";
import { HeadingH4, SmallText2 } from "../../../styles/utils/Headings.style";

export const BackgroundOutlineLogo = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    opacity: 0.2;
    transform: translate(30%, -20%) rotate(180deg);
    stroke-width: 0.5px;
    stroke: transparent;
    fill: var(--clr-bg-400);
    transition: all 400ms ease;
`;

export const OutlineLogoWrapper = styled.div`
    width: 2.4rem;
    aspect-ratio: 1 / 1;
    fill: var(--clr-txt-300);
    stroke: transparent;
    transition: all 400ms ease;
`;

export const VirtualCardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.2rem;
    margin-top: auto;
    background-color: var(--clr-card-100);
    color: white;
    padding-bottom: 0.4rem;
    padding-top: 0.8rem;
    transition: all 300ms ease;
`;

export const AccountNumber = styled.div`
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 600;
    color: var(--clr-txt-50);
    color: var(--clr-txt-200);
    margin-top: 1.6rem;
    padding-inline: 1.2rem;
    font-family: "oblivious", sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
`;

export const CreatedDate = styled.div`
    font-family: "credc";
    font-size: 0.9rem;
    color: var(--clr-txt-200);
`;

export const VirtualCardContainer = styled.div`
    padding: 0.4rem;
    border-radius: 1.6rem;
    background: transparent;
    pointer-events: none;
    transition: all 200ms ease;
`;

export const VirtualCardWrapper = styled.div`
    background-color: var(--clr-card-50);
    border-radius: 1.2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    position: relative;
    cursor: pointer;
    transition: all 200ms ease;
    overflow: hidden;
    pointer-events: auto;
    box-shadow: 1px 2px 6px hsla(var(--clr-shadow));

    &:hover {
        transform: perspective(1000px) rotateX(-2deg) rotateY(16deg);
        z-index: 99;
        /* background-color: var(--clr-bg-50); */
        box-shadow: 0 2rem 2rem -1rem hsla(var(--clr-shadow));
        box-shadow: 0.6rem 1.2rem 3rem hsla(var(--clr-shadow));
        background-image: linear-gradient(to bottom right, var(--clr-card-50) 30%, var(--clr-card-100));

        ${BackgroundOutlineLogo} {
            opacity: 0.4;
        }

        ${OutlineLogoWrapper} {
            fill: var(--clr-neutral-50);
        }

        ${VirtualCardFooter} {
            background: var(--clr-primary-main);
        }

        ${AccountNumber} {
            color: var(--clr-txt-50);
        }

        ${CreatedDate} {
            color: var(--clr-neutral-50);
        }
    }
`;

export const VirtualCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.8rem;
    padding-right: 1.2rem;
    padding-left: 0.6rem;
    padding-top: 0.6rem;
    overflow: hidden;
    padding-bottom: 0.8rem;
`;

export const AccountInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
`;

export const AvatarWrapper = styled.div`
    /* border-radius: 25%; */
`;

export const RoleCaption = styled(SmallText2)`
    text-transform: uppercase;
    font-weight: 450;
    letter-spacing: 1px;
`;

export const AccountName = styled(HeadingH4)`
    font-family: "kreditback", sans-serif;
    color: var(--clr-txt-100);
    letter-spacing: 1px;
`;
