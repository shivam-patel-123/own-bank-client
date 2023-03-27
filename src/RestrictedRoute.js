import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import path from "./constants/path";

const RestrictedRoute = () => {
    const account = useSelector((state) => state.user.account);

    return account.accountRole === "admin" ? (
        <Outlet />
    ) : (
        <Navigate to={path.SUMMARY} />
    );
};

export default RestrictedRoute;
