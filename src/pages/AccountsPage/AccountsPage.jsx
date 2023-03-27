import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VirtualCard } from "../../components";
import { fetchAllAccountsStart } from "../../redux/account/account.reducer";
import { AccountsList } from "./AccountsPage";

const AccountsPage = () => {
    const dispatch = useDispatch();
    const accounts = useSelector((state) => state.account.accounts);

    useEffect(() => {
        dispatch(fetchAllAccountsStart());
    }, []);

    return (
        <AccountsList>
            {accounts?.map((account) => (
                <VirtualCard account={account} />
            ))}
        </AccountsList>
    );
};

export default AccountsPage;
