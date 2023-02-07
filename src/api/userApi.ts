import { http } from "@/plugins/axios";

export interface IUser {
	name: string;
	age?: number;
	avator?: string;
}
interface ILogin {
	token: string;
}

export interface ILoginData {
	account: string;
	password: string;
}

class userApi {
	info() {
		return http.request<IUser>({
			url: "user/info",
			method: "GET",
		});
	}
	login(data: ILoginData) {
		return http.request<ILogin>({
			url: "login",
			method: "POST",
			data,
		});
	}
}

export default new userApi();
