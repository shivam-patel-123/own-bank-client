import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(RouterLink)`
    color: var(--clr-primary-main);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 150ms ease;

    &:hover {
        color: var(--clr-primary-100);
        letter-spacing: 1px;
        text-decoration: underline;
    }
`;
