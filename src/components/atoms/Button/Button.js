import styled, { css } from "styled-components";
import button from "../../../constants/button";

const { SMALL, LARGE } = button.size;
const { PRIMARY } = button.variant;

const primaryButton = css`
    background-color: var(--clr-primary-main);
    color: var(--clr-neutral-light);

    &:hover {
        background-color: var(--clr-primary-100);
    }
`;

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 0.6rem;
    text-transform: uppercase;
    font-weight: 550;
    transition: all 150ms ease;
    font-size: ${({ size }) => (size === SMALL ? "1.2rem" : "1.4rem")};
    padding: ${({ size }) =>
        size === SMALL
            ? "1rem 1.6rem"
            : size === LARGE
            ? "1.4rem 3rem"
            : "1.2rem 2rem"};
    padding-inline: ${({ wider }) => (wider ? "5rem" : "")};
    width: ${({ full }) => (full ? "100%" : "auto")};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? "0.3" : "1")};

    ${({ variant }) => {
        switch (variant) {
            case PRIMARY:
                return primaryButton;
            default:
                return;
        }
    }}

    &:hover {
        letter-spacing: 1px;
    }
`;
