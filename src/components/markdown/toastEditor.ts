import uploadApi from "@/api/upload";

export default class {
	editor: toastui.Editor;
	isFullscreen: boolean = false;
	constructor(el: string, initialValue: string, public height: string) {
		this.editor = new toastui.Editor({
			el: document.querySelector("#markdownEditor"),
			initialEditType: "markdown",
			previewStyle: "vertical",
			height,
			initialValue,
			toolbarItems: this.toolbar(),
		});
		this.ImageHook();
	}

	private toolbar() {
		return [
			["heading", "bold", "italic", "strike"],
			["hr", "quote"],
			["ul", "ol", "task", "indent", "outdent"],
			["table", "image", "link"],
			["code", "codeblock"],
			// Using Option: Customize the last button
			[
				{
					el: this.fullscreen(),
					command: "bold",
					tooltip: "fullscreen",
				},
			],
		];
	}

	private fullscreen() {
		const button = document.createElement("button") as HTMLButtonElement;
		button.innerHTML = "全屏";
		button.style.margin = "0";

		button.addEventListener("click", () => {
			this.toggleFullscreen();
		});
		document.documentElement.addEventListener("keyup", (event: KeyboardEvent) => {
			if (event.key === "Escape" && this.isFullscreen) {
				this.toggleFullscreen();
			}
		});

		return button;
	}

	private toggleFullscreen() {
		const ui = document.querySelector(".toastui-editor-defaultUI") as HTMLDivElement;
		ui.classList.toggle("fullscreen");
		this.isFullscreen = !this.isFullscreen;
		if (!this.isFullscreen) {
			this.editor.setHeight(this.height);
		} else {
			this.editor.setHeight("100vh");
		}
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
