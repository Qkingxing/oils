/**
 * 全局配置
 * 文件描述：
 * 	主要存放路径及接口相关
 * 	  iconUrl: 字体文件路径
 *    storageKey: 存入的 storage 的 key
 * 	  api: 系统接口相关
 *
 * @format
 */

export const basePath = 'https://oiljava.ldyxx.com:4435/';

// 字体文件路径
// export const iconUrl = "//at.alicdn.com/t/font_1873351_ou9avaul9xn.js";

// 用户存放 Storage 的 key 值
export const storageKey = {

};

// 接口相关
export const api = {
  login: 'user/login',

};
export const appError = {
	SITE_CLOSED: 180001,
};
export const version = process.env.VERSION;
