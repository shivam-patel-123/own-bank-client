import { Outlet } from "react-router-dom";

const PrivateRoute = ({ account }) => {
    return account && <Outlet />;
};

export default PrivateRoute;
