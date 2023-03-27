import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: var(--clr-card-50);
    border-radius: 1.2rem;
    width: 50rem;
    box-shadow: 0 3.2rem 3rem -2rem hsla(var(--clr-shadow));
    padding: 2.4rem 3.2rem 1.6rem 3.2rem;
    opacity: 1;
    transition: all 200ms ease;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h2`
    font-size: 1.8rem;
`;

export const Logo = styled.img`
    width: 2.8rem;
    height: 2.8rem;
`;

export const Body = styled.div`
    background-color: inherit;
`;
