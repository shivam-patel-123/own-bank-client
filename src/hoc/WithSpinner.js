const withSpinner = (WrappedComponent) => {
    const NewComponent = ({ isLoading, ...otherProps }) => {
        return (
            <>
                isLoading && <h1>LOADING...</h1>
                <WrappedComponent {...otherProps} />
            </>
        );
    };
    return NewComponent;
};

export default withSpinner;
