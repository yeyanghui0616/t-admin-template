import { http } from "@/plugins/axios";

export interface IUploadImage {
	url: string;
}

class uploadApi {
	uploadImage(data: FormData) {
		return http.request<IUploadImage>({
			url: "upload/image",
			method: "post",
			data,
		});
	}
}

export default new uploadApi();
