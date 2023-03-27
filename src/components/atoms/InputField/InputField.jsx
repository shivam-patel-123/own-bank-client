import React, { useState } from "react";
import { Error, FieldGroup, FieldInput, FieldLabel } from "./InputField";

const InputField = ({
    label,
    id,
    handleOnChange,
    handleOnBlur,
    error,
    ...otherProps
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const setFieldLabelPosition = () => {
        otherProps.value?.length !== 0 ? setIsActive(true) : setIsActive(false);
    };

    return (
        <div className="field__wrapper">
            <FieldGroup
                active={isActive ? true : false}
                focused={isFocused ? true : false}
            >
                <FieldInput
                    error={error ? true : false}
                    id={id}
                    {...otherProps}
                    onChange={handleOnChange}
                    onBlur={(e) => {
                        handleOnBlur(e);
                        setFieldLabelPosition();
                        setIsFocused(false);
                    }}
                    onFocus={() => {
                        setIsActive(true);
                        setIsFocused(true);
                    }}
                />
                <FieldLabel id={id}>{label}</FieldLabel>
            </FieldGroup>
            {error ? <Error>{error}</Error> : null}
        </div>
    );
};

export default InputField;
