import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
	{
		url: "/api/article",
		method: "get",
		response: () => {
			return {
				code: 200,
				message: "请求成功",
				status: "success",
				data: new Array(10).fill(null).map((article, index) => {
					return {
						id: index,
						title: Random.ctitle(),
						content: Random.cparagraph(),
					};
				}),
			};
		},
	},
] as MockMethod[];
