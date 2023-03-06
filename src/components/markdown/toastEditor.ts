import uploadApi from "@/api/upload";

export default class {
	editor: toastui.Editor;
	constructor(el: string, initialValue: string, public height: string) {
		this.editor = new toastui.Editor({
			el: document.querySelector("#editor"),
			initialEditType: "markdown",
			previewStyle: "vertical",
			height,
			initialValue,
		});
		this.ImageHook();
	}

	private ImageHook() {
		this.editor.removeHook("addImageBlobHook");

		this.editor.addHook("addImageBlobHook", async (blob: any, callback: Function) => {
			const formData = new FormData();
			formData.append("file", blob, blob.name);
			const response = await uploadApi.uploadImage(formData);
			callback(response.result.url, blob.name);
		});
	}
}
