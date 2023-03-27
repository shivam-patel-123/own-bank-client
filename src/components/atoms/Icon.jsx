import React from "react";

import { ReactComponent as Accounts } from "../../assets/accounts.svg";
import { ReactComponent as Summary } from "../../assets/summary.svg";
import { ReactComponent as Instalments } from "../../assets/installments.svg";
import { ReactComponent as Announcements } from "../../assets/announcements.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Setting } from "../../assets/setting.svg";
import { ReactComponent as Logout } from "../../assets/logout.svg";
import { ReactComponent as MoreOptions } from "../../assets/moreOptions.svg";
import { ReactComponent as LogoOutline } from "../../assets/logoOutline.svg";

let iconTypes = {
    logo: Logo,
    accounts: Accounts,
    summary: Summary,
    announcements: Announcements,
    instalments: Instalments,
    setting: Setting,
    logout: Logout,
    moreOptions: MoreOptions,
    logoOutline: LogoOutline,
};

const Icon = ({ name, ...props }) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />;
};

export default Icon;
