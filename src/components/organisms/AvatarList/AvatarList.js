import styled, { css } from "styled-components";

export const AvatarListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1.2rem 0.8rem;
    gap: 1.2rem;
    background-color: var(--clr-bg-50);
    border-right: 1px solid var(--clr-bg-200);
`;

export const AvatarWrapper = styled.div`
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    aspect-ratio: 1/1;
    cursor: pointer;

    ${({ active }) =>
        active
            ? css`
                  border: 2px solid var(--clr-primary-main);
              `
            : ""}
`;
