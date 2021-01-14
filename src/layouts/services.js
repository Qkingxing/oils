import request from "@/utils/request";
import { api } from "@/utils/config";

export function apiLogin() {
	return request({
		url: api.login,
		method: "post",
		data: {
      account:"88888888",
      password:"1234567"
    },
	});
}
