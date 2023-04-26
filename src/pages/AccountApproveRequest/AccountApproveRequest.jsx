import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotificationItem } from "../../components";
import { getApproveRequestStart } from "../../redux/user/user.reducer";

const AccountApproveRequest = () => {
    const dispatch = useDispatch();
    const approveRequests = useSelector((state) => state.user.approveRequests);

    useEffect(() => {
        dispatch(getApproveRequestStart());
    }, []);

    return (
        <div>
            {approveRequests.map((request) => (
                <NotificationItem key={request.accountNumber} data={request} />
            ))}
        </div>
    );
};

export default AccountApproveRequest;
