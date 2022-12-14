import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
const DEV_URL = process.env.REACT_APP_DEV_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function Get(url, token, config) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-api-key'] = API_KEY;
    return new Promise((resolve, reject) => {
        axios.get(DEV_URL + url, config)
            .then((response) => {
                if (response.status === 200) {
                    resolve(response.data.response);
                } else if (response.status === 401) {
                    console.log('NEWTER COMMAN JS');
                }
            })
            .catch((error) => {
                console.log("========>", error);
                if (error.response.status === 401) {
                    resolve({ data: [], meta: {}, status: 401 });
                } else if (error.response.status === 400) {
                    openNofi('error', 'Муу хүсэлт', 'Та Админтай холбогдоно уу');
                } else {
                    openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
                    reject({ data: [], meta: {} });
                }
            })
    })
}

export async function Post(url, token, config, data) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-api-key'] = API_KEY;
    return new Promise((resolve, reject) => {
        axios.post(DEV_URL + url, data, config)
            .then((response) => {
                if (response.status === 201) {
                    openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
                    resolve(201);
                } else if (response.status === 401) {
                    console.log('NEWTER COMMAN JS');
                } else {
                    resolve(201);
                }
            })
            .catch((error) => {
                openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
                resolve(400);
            })
    })
}

export async function DefaultPost(url, token, config, data) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-api-key'] = API_KEY;
    return new Promise((resolve, reject) => {
        axios.post(DEV_URL + url, data, config)
            .then((response) => {
                if (response.status === 201) {
                    openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
                    resolve(response.data.response);
                } else if (response.status === 401) {
                    console.log('NEWTER COMMAN JS');
                } else {
                    resolve(201);
                }
            })
            .catch((error) => {
                openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
                resolve(400);
            })
    })
}

export async function Patch(url, token, config, data) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-api-key'] = API_KEY;
    return new Promise((resolve, reject) => {
        axios.patch(DEV_URL + url, data, config)
            .then((response) => {
                if (response.status === 200) {
                    openNofi('success', 'Амжилттай', 'Амжиллтай хадгалагдсан');
                    resolve(200);
                } else if (response.status === 401) {
                    console.log('NEWTER COMMAN JS');
                }
            })
            .catch((error) => {
                openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
                resolve(400);
            })
    })
}

export async function Delete(url, token, config) {
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['x-api-key'] = API_KEY;
    return new Promise((resolve, reject) => {
        axios.delete(DEV_URL + url, config)
            .then((response) => {
                if (response.status === 200) {
                    openNofi('success', 'Амжилттай', 'Амжиллтай устгагдасан');
                    resolve(200);
                } else if (response.status === 401) {
                    console.log('NEWTER COMMAN JS');
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    openNofi('error', 'Алдаа', 'Устгах боложгүй');
                    resolve(400);
                } else {
                    openNofi('error', 'Алдаа', 'Сервертэй холбогдоход алдаа гарлаа');
                    resolve(400);
                }

            })
    })
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

export const numberToCurrency = (amount) => {
    return amount?.toLocaleString('mn-MN', { style: 'currency', currency: 'MNT' })
}