import axios from "axios";

const axiosInstace = axios.create({
    baseURL: 'https://houscan.shop',
});

axiosInstace.interceptors.request.use(
    (config) => {
        const csrftoken = localStorage.getItem('csrftoken');
        if (csrftoken) {
            config.headers["Authorization"] = `Bearer ${csrftoken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstace;
