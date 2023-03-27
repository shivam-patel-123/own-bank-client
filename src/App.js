import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import useThemeDetector from "./hooks/useThemeDetector";
import LoginPage from "./pages/LoginPage/LoginPage.component";
import HomePage from "./pages/HomePage/HomePage.jsx";
import PrivateRoute from "./PrivateRoute";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";

import path from "./constants/path";
import AccountApproveRequest from "./pages/AccountApproveRequest/AccountApproveRequest";
import RestrictedRoute from "./RestrictedRoute";
import { Navigation, AvatarList } from "./components";
import useAuth from "./hooks/useAuth";
import { LoadingBar, LoadingBarContainer } from "./styles/utils/Loading.style";
import { useSelector } from "react-redux";
import AccountsPage from "./pages/AccountsPage/AccountsPage.jsx";

function App() {
    const theme = useThemeDetector();
    const { account, linkedAccounts, isFetching } = useAuth();
    const { loading, parentAccount } = useSelector((state) => state.user);

    const linkedAccountsGenerator = () => {
        const list = [];
        if (!parentAccount) {
            list.push({ accountNumber: account?.accountNumber, profilePicture: account?.profilePicture });
        } else {
            list.push({ accountNumber: parentAccount.accountNumber, profilePicture: parentAccount.profilePicture });
        }
        list.push(...linkedAccounts);
        return list;
    };

    return (
        <div className={`app ${theme}`}>
            {(loading || isFetching) && (
                <LoadingBarContainer>
                    <LoadingBar />
                </LoadingBarContainer>
            )}
            {account
                ? !isFetching && (
                      <>
                          <AvatarList avatars={linkedAccountsGenerator()} />
                          <Navigation />
                          <div className="main-section">
                              <Routes>
                                  <Route element={<PrivateRoute account={account} />}>
                                      <Route element={<RestrictedRoute />}>
                                          <Route path="/approve" element={<AccountApproveRequest />} />
                                      </Route>
                                      <Route path={path.SUMMARY} exact element={<HomePage />} />
                                      <Route path={path.ANNOUNCEMENTS} exact element={<div>ANNOUNCEMENT SCREEN...</div>} />
                                      <Route path={path.INSTALMENTS} exact element={<div>INSTALMENTS SCREEN...</div>} />
                                      <Route path={path.ACCOUNTS} exact element={<AccountsPage />} />
                                  </Route>
                                  <Route path="/*" element={<Navigate to={path.SUMMARY} />} />
                              </Routes>
                          </div>
                      </>
                  )
                : !isFetching && (
                      <Routes>
                          <Route path={path.SIGN_UP} exact element={<SignUpPage />} />
                          <Route path={path.LOGIN} exact element={<LoginPage />} />
                          <Route path="/*" element={<Navigate to={path.LOGIN} />} />
                      </Routes>
                  )}
        </div>
    );
}

export default App;
