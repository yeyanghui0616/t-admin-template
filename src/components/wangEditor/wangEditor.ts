export default class {
	editor: wangEditor;
	constructor(el: string, callback: Function, config: { [key: string]: any }) {
		this.editor = new wangEditor(el); // 初始化wangEditor
		// this.editor.config.height = config.height;
		// this.editor.config.uploadImgServer = config.uploadImgServer;

		Object.assign(this.editor.config, config);
		this.editor.config.onchange = callback;

		this.editor.config.uploadImgHooks = this.uploadImage();
		this.editor.create();
		this.editor.txt.html(config.modelValue);
	}

	uploadImage() {
		return {
			customInsert: function (insertImgFn: Function, result: any) {
				// result 即服务端返回的接口
				// insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
				insertImgFn(result.result.url);
			},
		};
	}
}
