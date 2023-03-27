import styled, { css } from "styled-components";

export const FieldLabel = styled.label`
    position: absolute;
    /* top: ${({ value }) => (value ? "0" : "50%")}; */
    top: 50%;
    left: 0;
    background-color: var(--clr-card-50);
    margin-left: 1.2rem;
    padding: 0 0.8rem;
    transform: translateY(-50%);
    font-size: 1.3rem;
    transition: all 150ms ease-out;
    color: var(--clr-txt-200);
    pointer-events: none;
`;

export const FieldGroup = styled.div`
    margin-top: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: visible;
    padding: 0.3rem;
    background-color: inherit;

    ${({ active }) =>
        active
            ? css`
                  ${FieldLabel} {
                      top: 0;
                  }
              `
            : ""}

    ${({ focused }) =>
        focused
            ? css`
                  ${FieldLabel} {
                      background-color: var(--clr-secondary-main);
                      color: var(--clr-neutral-dark);
                      border-radius: 4px;
                  }
              `
            : ""}
`;

export const FieldInput = styled.input`
    padding: 1.2rem 2.4rem;
    border-radius: 0.6rem;
    border: ${({ error }) => (error ? "2px solid var(--clr-error-main)" : "1px solid var(--clr-bg-300)")};
    font-size: 1.5rem;
    width: 100%;
    background-color: var(--clr-card-50);
    color: var(--clr-txt-100);
    font-weight: 600;
    outline: none;

    &:focus {
        border-color: var(--clr-secondary-main);
        box-shadow: 0 0 0 3px var(--clr-secondary-100);
        color: var(--clr-txt-50);
    }

    ${({ readOnly }) =>
        readOnly
            ? css`
                  cursor: not-allowed;
                  color: var(--clr-txt-200);

                  ${FieldGroup} {
                  }

                  & + ${FieldLabel} {
                      top: 0;
                  }
              `
            : ""}
`;

export const Error = styled.div`
    color: var(--clr-error-main);
    font-size: 1.1rem;
    font-weight: 500;
`;
