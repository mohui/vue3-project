import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:8080"
})

// 请求拦截器

service.interceptors.request.use(config => {
    // const token = getToken();
    // if (token) {
    //     config.headers = config.headers || {};
    //     config.headers[TokenKey] = token;
    // }

    return config;
});
// 响应拦截器
service.interceptors.response.use(response => {
    return response
    }, error => {
     return Promise.reject(error)
    }

)
service.interceptors.response.use(response => {

        return response;
    });

export default service