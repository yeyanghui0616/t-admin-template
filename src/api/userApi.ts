import { http } from "@/plugins/axios";

export interface IUser {
	name: string;
	age?: number;
	avator?: string;
}
interface ILogin {
	token: string;
}

class userApi {
	info() {
		return http.request<IUser>({
			url: "user/info",
			method: "GET",
		});
	}
	login(data: any) {
		return http.request<ILogin>({
			url: "login",
			method: "POST",
			data,
		});
	}
}

export default new userApi();
