import classNames from "classnames";
import React from "react";
import {
    Title,
    Wrapper,
    Header,
    HeaderWrapper,
    Logo,
    Body,
} from "./Card.styles";

const Card = ({ children, className: classes, ...restProps }) => (
    <Wrapper className={classNames(classes)} {...restProps}>
        {children}
    </Wrapper>
);

Card.Header = function ({
    children,
    prepopulate = true,
    title,
    className: classes,
    ...restProps
}) {
    return (
        <HeaderWrapper>
            <Header {...restProps}>
                {prepopulate ? (
                    <>
                        <Card.Title>{title}</Card.Title>
                        <Logo src="/assets/logo.svg" alt="Own Bank Logo" />
                    </>
                ) : null}
            </Header>
            {children ? <>{children}</> : null}
        </HeaderWrapper>
    );
};

Card.Title = function ({ children, className: classes, ...restProps }) {
    return (
        <Title className={classNames(classes)} {...restProps}>
            {children}
        </Title>
    );
};

Card.Body = function ({ children, className: classes, ...restProps }) {
    return (
        <Body className={classNames(classes)} {...restProps}>
            {children}
        </Body>
    );
};

export default Card;
