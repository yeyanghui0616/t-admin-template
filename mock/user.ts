import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
	{
		url: "/api/user/info",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				status: "success",
				data: {
					name: "小小22叶",
					avator: "/images/login.jpg",
					permissions: ["editor_markdown", "article_edit"],
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
				status: "success",
				data: {
					token: Random.string(10),
				},
			};
		},
	},
] as MockMethod[];
