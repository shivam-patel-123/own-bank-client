import button from "../../../constants/button";
import { Button as Btn } from "./Button";

const Button = ({ children, variant, size, ...otherProps }) => (
    <Btn
        variant={variant ? variant : button.variant.PRIMARY}
        size={size ? size : button.size.NORMAL}
        {...otherProps}
    >
        {children}
    </Btn>
);

export default Button;
