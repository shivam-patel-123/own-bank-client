import styled, { css } from "styled-components";

export const TabsArea = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
`;

export const Tab = styled.div`
    flex: 1;
    justify-self: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.2rem;
    padding-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    border-bottom: 1px solid var(--clr-bg-400);
    white-space: nowrap;

    ${({ active }) =>
        active
            ? css`
                  border-bottom: 2px solid var(--clr-primary-main);
                  color: var(--clr-primary-main);
                  font-weight: 550;
              `
            : ""};

    &:hover {
        color: var(--clr-primary-main);
        cursor: pointer;
        user-select: none;
    }
`;
