import axios from "axios";

const aiAxiosInstace = axios.create({
    baseURL: 'https://houscan.store',
});

export default aiAxiosInstace;
