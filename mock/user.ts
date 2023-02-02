import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
	{
		url: "/api/get",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				type: "success",
				result: {
					name: "小小叶",
				},
			};
		},
	},
	{
		url: "/api/login",
		method: "post",
		response: () => {
			return {
				code: 200,
				message: "登录成功",
				type: "success",
				result: {
					token: Random.string(10),
				},
			};
		},
	},
] as MockMethod[];
