import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import path from "../constants/path";
import { loginSuccess } from "../redux/user/user.reducer";

const useAuth = () => {
    const { account, linkedAccounts, loading } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const verify = async () => {
            try {
                setIsFetching(true);
                const { data } = await axios.post(
                    "http://localhost:6001/api/v1/account/login",
                    {},
                    {
                        withCredentials: true,
                    }
                );

                setIsFetching(false);
                dispatch(loginSuccess(data.data.account));
            } catch (e) {
                setIsFetching(false);
                console.log(e);
                navigate(path.LOGIN);
            }
        };

        if (!loading && !account) {
            console.log("CALLED");
            verify();
        }
    }, []);

    return { account, linkedAccounts, isFetching };
};

export default useAuth;
