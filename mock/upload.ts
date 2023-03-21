import { MockMethod } from "vite-plugin-mock";
import { Random } from "mockjs";
export default [
	{
		url: "/api/upload/image",
		method: "post",
		response: () => {
			return {
				code: 200,
				message: "上传成功",
				status: "success",
				data: {
					url: "/images/login.jpg",
				},
			};
		},
	},
] as MockMethod[];
