import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationItemWrapper = styled(Link)`
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    gap: 1.2rem;
    align-items: center;
    padding: 0.8rem 1.2rem 0.8rem 1.6rem;
    font-size: 1.2rem;
    cursor: pointer;
    fill: var(--clr-txt-200);
    font-weight: 500;
    color: var(--clr-txt-100);
    border-radius: 0.6rem;

    svg {
        width: 1.8rem;
        height: 1.8rem;
    }

    ${({ active }) =>
        active
            ? css`
                  fill: var(--clr-neutral-light);
                  background-color: var(--clr-primary-main);
                  color: var(--clr-neutral-light);
              `
            : css`
                  &:hover {
                      fill: var(--clr-txt-100);
                      background-color: var(--clr-bg-300);
                  }
              `}
`;
