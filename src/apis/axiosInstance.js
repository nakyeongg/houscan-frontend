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

const getNewAcessToken = async (refreshToken) => {
    try {
        const response = await axiosInstace.post('/token/refresh/', {
            "refresh": refreshToken
        });
        console.log('새로운 acessToken 가져오기 성공', response);
        const newAccessToken = response.data.access;
        localStorage.setItem('accessToken', newAccessToken);
        return newAccessToken;
    } catch(error) {
        console.log('새로운 acessToken 가져오기 실패', error);
    }
}

axiosInstace.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        console.log(error);
        const originalRequest = error.config;
        if (error.response && (error.response.status===500 || error.response.status===401) && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // 새로운 AccessToken을 받아와서 다시 요청 보내기
                const refreshToken = localStorage.getItem('refreshToken');
                const newAccessToken = await getNewAcessToken(refreshToken);
                axiosInstace.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
                originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return axiosInstace(originalRequest);
            } catch(error) {
                console.log('accessToken 재발급 실패', error);
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstace;
