// Native
import axios from "axios";

const URL = "https://api.github.com/"

const api = axios.create({
    method: 'get',
    baseURL: URL,
});

export default api;