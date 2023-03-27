import { useEffect } from "react";
import { InputField } from "../..";
import button from "../../../constants/button";
import path from "../../../constants/path";
import withFormHandler from "../../../hoc/withFormHandler";
import { Link } from "../../../styles/utils/Link.style";

import { generateAccountNumber } from "../../../utils/generateAccount";
import { Button } from "../../";
import { SubmitButtonWrapper } from "../LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../../redux/user/user.reducer";

const initialState = {
    accountNumber: "",
    accountName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = ({
    data,
    error,
    onChange,
    onInvalid,
    onBlur,
    onSubmit,
    updateDataState,
}) => {
    const dispatch = useDispatch();
    const { accountNumber, accountName, email, password, confirmPassword } =
        data;
    const {
        accountNumber: accountNumberError,
        accountName: accountNameError,
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
    } = error;

    useEffect(() => {
        updateDataState({ accountNumber: generateAccountNumber() });
    }, []);

    return (
        <form
            onSubmit={onSubmit(() => {
                const { accountNumber, accountName, email, password } = data;
                dispatch(
                    signUpStart({ accountName, accountNumber, email, password })
                );
            })}
        >
            <InputField
                label="Account Number"
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={accountNumber}
                error={accountNumberError}
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
                readOnly
            />
            <InputField
                label="Account Name"
                type="text"
                id="accountName"
                name="accountName"
                value={accountName}
                error={accountNameError}
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
                required
                pattern="^[A-Za-z\s]{3,16}$"
            />
            <InputField
                label="Email"
                type="email"
                id="email"
                name="email"
                value={email}
                error={emailError}
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
                required
            />
            <InputField
                label="Password"
                type="password"
                id="password"
                name="password"
                value={password}
                error={passwordError}
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
                required
                minLength="8"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            />
            <InputField
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                error={confirmPasswordError}
                handleOnChange={onChange}
                onInvalid={onInvalid}
                handleOnBlur={onBlur}
                required
                pattern={password}
            />
            <SubmitButtonWrapper className="button__wrapper">
                <Link to={path.LOGIN}>Already have an account? Login</Link>
                <Button type="submit" size={button.size.NORMAL}>
                    Submit
                </Button>
            </SubmitButtonWrapper>
        </form>
    );
};

export default withFormHandler(SignUpForm, initialState);
