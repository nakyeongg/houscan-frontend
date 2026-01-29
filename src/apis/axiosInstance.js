import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://houscan.shop',
    timeout: 300000,
});

let isRefreshing = false;

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        } else {
            delete config.headers["Authorization"];
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const getNewAcessToken = async (refreshToken) => {
    try {
        const response = await axios.post('https://houscan.shop/token/refresh/', {
            "refresh": refreshToken
        });
        console.log('새로운 acessToken 가져오기 성공', response);
        const newAccessToken = response.data.access;
        localStorage.setItem('accessToken', newAccessToken);
        return newAccessToken;
    } catch (error) {
        console.log('새로운 acessToken 가져오기 실패', error);
    }
}

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log(error);
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return Promise.reject(error);
            }
            originalRequest._retry = true;
            isRefreshing = true;

            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                handleLogout();
                return Promise.reject(error);
            }

            try {
                // 새로운 AccessToken을 받아와서 다시 요청 보내기
                const newAccessToken = await getNewAcessToken(refreshToken);
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (error) {
                handleLogout();
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }
        return Promise.reject(error);
    }
)

const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/';
}

export default axiosInstance;
