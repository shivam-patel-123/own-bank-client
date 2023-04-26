import React, { useState } from "react";

const WithFormHandler = (WrappedComponent, initialState) => {
    console.log(initialState);
    const NewComponent = ({ ...otherProps }) => {
        const [data, setData] = useState(initialState);
        const [error, setError] = useState(initialState);

        const updateDataState = (value) => {
            setData((prevState) => ({
                ...prevState,
                ...value,
            }));
        };

        const updateErrorState = (value) => {
            setError((prevState) => ({
                ...prevState,
                ...value,
            }));
        };

        const onChange = (e) => {
            const { name, value } = e.target;

            updateDataState({ [name]: value });
        };

        const onInvalid = (e) => {
            const { validationMessage, name } = e.target;

            updateErrorState({ [name]: validationMessage });
        };

        const onBlur = (e) => {
            const { name, validationMessage } = e.target;

            const isValid = e.target.checkValidity();

            if (!validationMessage || !isValid) {
                updateErrorState({ [name]: validationMessage });
            }
        };

        const onSubmit = (cb) => {
            return (e) => {
                e.preventDefault();

                const formElement = e.target;
                const isValid = formElement.checkValidity();

                if (isValid) {
                    cb();
                }
            };
        };

        return (
            <WrappedComponent
                data={data}
                error={error}
                onChange={onChange}
                onInvalid={onInvalid}
                onSubmit={onSubmit}
                onBlur={onBlur}
                updateDataState={updateDataState}
                updateErrorState={updateErrorState}
                {...otherProps}
            />
        );
    };

    return NewComponent;
};

export default WithFormHandler;
