import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://houscan.shop',
    timeout: 300000,
});

let isRefreshing = false;
let failedQueue = []; // 실패한 요청들

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

axiosInstance.interceptors.request.use(
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
        throw error;
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
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => Promise.reject(err));
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
                processQueue(null, newAccessToken);
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            } catch (error) {
                processQueue(error, null);
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
}

export default axiosInstance;
