declare namespace toastui {
	class Editor {
		constructor(options: any);
		on: (event: string, callback: Function) => void;
		getMarkdown: () => string;
		getHTML: () => string;
		removeHook: (type: string) => void;
		addHook: (type: string, handler: Function) => void;
		setHeight: (height: string) => void;
		focus: () => void;
	}
}

declare class wangEditor {
	constructor(el: string);
	config: {
		[key: string]: any;
	};
	txt: {
		[key: string]: any;
	};
	create: () => void;
}
