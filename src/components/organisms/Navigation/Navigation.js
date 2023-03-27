import styled from "styled-components";

export const NavSection = styled.div`
    padding: 1.2rem 0.6rem;

    &:not(&:last-of-type) {
        border-bottom: 1px solid var(--clr-bg-300);
    }
`;

export const NavigationContainer = styled.div`
    background-color: var(--clr-bg-50);
    padding-block: 0.6rem;
    overflow: visible;
    /* box-shadow: 2px 0 8px rgba(55, 84, 170, 0.08); */
    border-right: 1px solid var(--clr-bg-200);
    /* position: relative;
    z-index: 1000; */
`;

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    fill: var(--clr-txt-50);
`;

export const NavigationLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;
