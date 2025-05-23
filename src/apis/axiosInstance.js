import axios from "axios";

const axiosInstace = axios.create({
    baseURL: 'https://houscan.shop',
});

axiosInstace.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstace;
