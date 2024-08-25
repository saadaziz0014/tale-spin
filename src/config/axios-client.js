import axiosClient from "axios";
import { constants } from "../config/constant";

const user = JSON.parse(localStorage.getItem("user"))

export const axios = axiosClient.create({
    baseURL: constants.backendBaseUrl,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${user && user.token ? user.token : ""}`
    }
})
