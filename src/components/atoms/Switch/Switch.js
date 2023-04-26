import styled from "styled-components";

const width = 40;
const height = 26;
const padding = 3;
const circleWidth = width * 0.5;

export const SwitchWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: ${width / 10}rem;
    height: ${height / 10}rem;
    cursor: pointer;
`;

export const Slider = styled.span`
    position: absolute;
    inset: 0;
    background-color: var(--clr-bg-200);
    border-radius: 1000px;
    transition: all 300ms ease;

    &::before {
        content: "";
        position: absolute;
        width: ${circleWidth / 10}rem;
        height: ${height / 10 - (padding / 10) * 2}rem;
        left: ${padding / 10}rem;
        top: ${padding / 10}rem;
        background-color: white;
        border-radius: 50%;
        transition: all 300ms ease;
    }
`;

export const Checkbox = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
        background-color: #2196f3;
    }

    &:checked + ${Slider}::before {
        transform: translateX(${(width - padding * 2 - circleWidth) / 10}rem);
    }
`;
