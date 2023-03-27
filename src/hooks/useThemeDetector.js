import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../redux/user-preferences/user-preferences.reducer";

const useThemeDetector = () => {
    const dispatch = useDispatch();

    const switchTheme = (e) => {
        if (e.matches) {
            dispatch(changeTheme("dark"));
        } else {
            dispatch(changeTheme("light"));
        }
    };

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        switchTheme(mq);
        mq.addEventListener("change", switchTheme);
        return () => mq.removeEventListener("change", switchTheme);
    }, []);

    const { theme } = useSelector((state) => state.userPreferences);
    return theme;
};

export default useThemeDetector;
