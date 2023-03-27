import { useDispatch } from "react-redux";
import { Button } from "../..";
import { approveRequestStart } from "../../../redux/user/user.reducer";

const NotificationItem = ({ data }) => {
    const { accountName, accountNumber } = data;
    const dispatch = useDispatch();

    const handleApproveRequest = (e) => {
        dispatch(approveRequestStart({ accountNumber }));
    };

    return (
        <div>
            <div>
                <h3>{accountName}</h3>
                <h3>{accountNumber}</h3>
            </div>
            <div>
                <Button onClick={handleApproveRequest}>Approve</Button>
            </div>
        </div>
    );
};

export default NotificationItem;
