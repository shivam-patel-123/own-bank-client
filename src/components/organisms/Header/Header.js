import styled from "styled-components";

export const HeaderWrapper = styled.div`
    background-color: var(--clr-bg-100);
    padding: 0.8rem 1.2rem;
    position: relative;
    z-index: 9999;
    transform: perspective(1000px);
`;

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 9999;
    transform: translateZ(50px);
`;

export const SearchBar = styled.input``;

export const SearchResultWrapper = styled.div`
    display: ${({ active }) => (active ? "block" : "none")};
    position: absolute;
    inset: 0;
    width: 100%;
    height: 300px;
    background-color: var(--clr-bg-100);
    box-shadow: 0 5px 2rem hsla(var(--clr-shadow));
    z-index: 9;
`;
