import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://localhost:6001/api/v1",
    withCredentials: true,
});
