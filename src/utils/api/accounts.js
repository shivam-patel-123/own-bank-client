import { axios } from "./axios";

export const login = async (body) => {
    const { email, password } = body;

    if (!email || !password) return;
    return await axios.post("/account/login", { email, password });
};

export const signUp = async (body) => {
    const { accountNumber, accountName, email, password } = body;

    return await axios.post("/account/request", {
        accountNumber,
        accountName,
        email,
        password,
        accountRole: "user",
    });
};

export const logout = async () => {
    return await axios.get("/account/logout");
};

export const getAccountApproveRequests = async () => {
    return await axios.get("/account/approve");
};

export const approveRequest = async (body) => {
    return await axios.post("/account/approve", body);
};

export const updateProfilePicture = async (body) => {
    return await axios.post("/avatar", body, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const switchAccount = async (body) => {
    return await axios.post("/account/switch", body);
};

export const fetchAllAccounts = async () => {
    return await axios.get("/account");
};
