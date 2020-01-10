import { baseUrl } from "./env";
import router from "@/router";
import axios from "axios";

axios.defaults.timeout = 10000; // 设置请求时间
axios.defaults.baseUrl = baseUrl; // 设置默认接口地址
axios.defaults.headers.post["Content-type"] = "application/json";

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.getItem("token")) {
      config.headers.token = localStorage.getItem("token");
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// http response 拦截器
axios.interceptors.response.use(
  response => {
    // 拦截相应 做统一处理
    switch (response.data.code) {
      case "000":
        router.replace({
          path: "/login"
        });
    }
    return response;
  },
  // 接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.message); // 返回接口返回的错误信息
  }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
