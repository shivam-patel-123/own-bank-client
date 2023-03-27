import styled from "styled-components";

export const ProfileCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`;

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
`;

export const ActionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
`;

export const ActionButton = styled.div`
    padding: 1rem;
    fill: var(--clr-txt-100);
    background-color: var(--clr-neutral-light);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 6px hsla(var(--clr-shadow));
    cursor: pointer;
    transition: all 200ms ease;

    .dark & {
        background-color: var(--clr-bg-200);
    }

    &:hover {
        border-radius: 0.6rem;
        box-shadow: 3px 6px 2rem hsla(var(--clr-shadow));
    }

    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
`;

export const LogoutButton = styled(ActionButton)`
    .dark &,
    .light & {
        background-color: var(--clr-error-main);
        fill: var(--clr-neutral-light);
    }
`;
