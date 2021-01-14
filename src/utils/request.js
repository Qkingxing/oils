import axios from "axios";
import { message } from "antd";
// import { storageKey } from "./config";
// import { sign_v2 } from "@/utils/utils";
import { version } from "react";
// import { localStore } from "@/utils/utilHelper";
// import { get, omit } from "lodash-es";
// import { getDvaApp } from 'umi';
import { basePath } from './config'

const instance = axios.create({
	baseURL: basePath,
	// timeout: 10000,
	// withCredentials: true,
	headers: {},
});

// 请求前拦截
instance.interceptors.request.use(
	(config) => {
		// requestCount为0，才创建loading, 避免重复创建
		if (config && config.headers.isLoading !== false) {
			// showLoading()
		}
		return config;
	},
	(err) => {
		// 判断当前请求是否设置了不显示Loading
		if (err && err.config.headers.isLoading !== false) {
			// hideLoading()
		}
		return Promise.reject(err);
	}
);

// 返回后拦截
instance.interceptors.response.use(
	(res) => {
		// 判断当前请求是否设置了不显示Loading
		if (!res || res.config.headers.isLoading !== false) {
			// hideLoading()
		}
		return res;
	},
	(err) => {
		if (err.config.headers.isLoading !== false) {
			// hideLoading()
		}
		if (err.message === "Network Error") {
			message.warning("网络连接异常！");
		}
		if (err.code === "ECONNABORTED") {
			message.warning("请求超时，请重试");
		}
		return Promise.reject(err);
	}
);

// 请求方法
const fetch = (options) => {
	let { method = "post", data: params = {}, url, headers = {}} = options;

  let token = localStorage.getItem("token") || "";

	// if(params.token === "false"){// api.joinRoom 加入房间: 区分首页从聊天室列表卡片(是以游客身份加入)
	// 	token=null;
	// 	delete params.token;
	// }
	// else if (params.token) {
	// 	token = params.token;
	// 	delete params.token;
  // }

  // let urls = 'https://oiljava.ldyxx.com:4435/' + url;

	// params.timestamp = Math.round(new Date().getTime() / 1000);
	// params.sign = sign_v2(params, token ? token : "", "pc", version);
	// params.token = token || "";

	params = JSON.stringify(params)

	switch (method.toLowerCase()) {
		case "get":
			return instance.get(url, { params });
		case "post":
			instance.defaults.headers.common["token"] = token;
			instance.defaults.headers.common["X-APP-SIGN-VERSION"] = "v2";
			instance.defaults.headers.common["X-APP-VERSION"] = version;
			instance.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
			return instance.post(url, params);
		case "put":
			return instance.put(url, params);
		default:
			return axios(options);
	}
};

export default function request(options) {
	return fetch(options)
		.then((response) => {
			const { data = {}, status, message } = response.data;
			//console.info(options.url, status, message, response.data);
			if (status === 0) {
				/* 请求成功且 状态码为 0
				 * ---------------------------------------- */
				return Promise.resolve({
					success: true,
					message: message,
					status: status,
					data: data,
				});
			} else {
				return Promise.resolve({
					success: false,
					status: status,
					message: message,
					data: data,
				});
			}
		})
		.catch((error) => {
			const { response } = error;
			let msg;
			if (response && response instanceof Object) {
				const { data, statusText, status: code } = response;
				msg = data.message || statusText;

				if (code === 401) {
					// stip : 全局提醒, 可能需要产品介入
					message.error("无权访问, 请登录后重试");

					setTimeout(() => {
						// 清除token
						localStore(storageKey.TOKEN, null);
						// 跳转首页
						window.location.href = window.location.origin;
					}, 1500);

					return Promise.resolve({
						success: false,
						status: code,
						message: "无权访问, 请登录后重试",
						data: {},
					});
				}

				if (code === 500) {
					msg = "错误码 = " + code + "，请联系管理人员或者是客服人员！";
				} else {
					msg = "错误码 = " + code;
				}
				console.error(options.url, code, msg, response);
				return Promise.resolve({
					success: false,
					status: code,
					message: msg,
					data: {},
				});
			} else {
				msg = error.message || "未知错误(一般是访问超时)";
				console.error(options.url, 520, msg, error);
				return Promise.resolve({
					success: false,
					status: 520,
					message: msg,
					data: {},
				});
			}
		});
}
