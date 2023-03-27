import React from "react";

import { LoginForm, Card } from "../../components";
import { FormWrapper } from "./LoginPage.styles";
import { CenteredCard } from "../../styles/utils/Card.style";

const LoginPage = () => {
    return (
        <>
            <CenteredCard>
                <Card.Header title="Login" />
                <Card.Body>
                    <FormWrapper>
                        <LoginForm />
                    </FormWrapper>
                </Card.Body>
            </CenteredCard>
        </>
    );
};

export default LoginPage;
