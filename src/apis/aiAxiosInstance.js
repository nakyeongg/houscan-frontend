import axios from "axios";

const aiAxiosInstance = axios.create({
    baseURL: 'https://houscan.store',
});

export default aiAxiosInstance;
