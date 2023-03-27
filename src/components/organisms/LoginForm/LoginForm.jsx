import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, InputField } from "../../";

import path from "../../../constants/path";
import button from "../../../constants/button";

import WithFormHandler from "../../../hoc/withFormHandler";
import { loginInStart } from "../../../redux/user/user.reducer";
import { Link } from "../../../styles/utils/Link.style";
import { Form, SubmitButtonWrapper } from "./LoginForm";
import { useNavigate } from "react-router-dom";

const initialState = {
    email: "",
    password: "",
};

const LoginForm = ({ onSubmit, onChange, onInvalid, onBlur, data, error }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, password } = data;
    const { email: emailError, password: passwordError } = error;
    // const { error } = useSelector((state) => state.user);
    const { loading } = useSelector((state) => state.user);

    return (
        <Form
            onSubmit={onSubmit(() => {
                console.log(data);
                dispatch(loginInStart(data));
                navigate(path.SUMMARY, { replace: true });
            })}
            noValidate
        >
            <InputField
                label="Email Address"
                type="email"
                id="email"
                name="email"
                value={email}
                error={emailError}
                required
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
            />
            <InputField
                label="Password"
                type="password"
                id="password"
                name="password"
                value={password}
                error={passwordError}
                required
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
            />
            <SubmitButtonWrapper className="button__wrapper">
                <Link to={path.SIGN_UP}>Create New Account</Link>
                <Button type="submit" size={button.size.NORMAL} disabled={loading}>
                    Submit
                </Button>
            </SubmitButtonWrapper>
        </Form>
    );
};

export default WithFormHandler(LoginForm, initialState);
