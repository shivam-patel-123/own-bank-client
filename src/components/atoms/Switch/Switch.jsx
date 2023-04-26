import { useDispatch } from "react-redux";
import useThemeDetector from "../../../hooks/useThemeDetector";
import { toggleTheme } from "../../../redux/user-preferences/user-preferences.reducer";
import { Checkbox, Slider, SwitchWrapper } from "./Switch";

const Switch = () => {
    const dispatch = useDispatch();
    const theme = useThemeDetector();

    return (
        <SwitchWrapper>
            {/* Order of Checkbox and Slider is important. Do not change it. */}
            <Checkbox
                checked={theme === "light"}
                type="checkbox"
                onChange={(e) => {
                    dispatch(toggleTheme());
                }}
            />
            <Slider />
        </SwitchWrapper>
    );
};

export default Switch;
