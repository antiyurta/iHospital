import axios from "axios";
import { notification } from "antd";
import { selectCurrentToken } from "../features/authReducer";
import { useSelector } from "react-redux";

const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const config = {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "x-api-key": API_KEY
    }
}

const getConfig = {
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "x-api-key": API_KEY
    }
}

export const ScrollRef = (scrollRef) => {
    const el = scrollRef.current;
    if (el) {
        const wheelListener = (e) => {
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY * 100,
                behavior: "smooth"
            });
        };
        el.addEventListener("wheel", wheelListener);
        return () => el.removeEventListener("wheel", wheelListener);
    }
}

export const openNofi = (type, message, description) => {
    notification[type]({
        message: `${message}`,
        description: `${description}`
    })
}

export function Get(url, params) {
    if (params) {
        getConfig.params = params;
        return axios.get(DEV_URL + url, getConfig);
    }
    return axios.get(DEV_URL + url, config);
}

export function Post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(DEV_URL + url, data, config)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}

export function Patch(url, id, data) {
    return new Promise((resolve, reject) => {
        axios.patch(DEV_URL + url + '/' + id, data, config)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}

export function Delete(url) {
    return new Promise((resolve, reject) => {
        axios.delete(DEV_URL + url, config)
            .then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
    })
}