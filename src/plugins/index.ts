import { App } from "vue";
import { setupTailwindcss } from "./tailwindcss";
import _ from "lodash";
import setupElementPlus from "./elementui";
import setupPinia from "./pinia";
import setupIconPark from "./iconpark";

export function setupPlugins(app: App) {
	// autoRegisterComponent(app);
	setupTailwindcss();
	setupElementPlus();
	setupPinia(app);
	setupIconPark(app);
}

// 自动注册全局组件
// function autoRegisterComponent(app: App) {
// 	const components = import.meta.glob("../components/form/*.vue", {
// 		eager: true,
// 	});

// 	Object.keys(components).forEach((key) => {
// 		const name = key.split("/").pop()?.split(".")[0] as string;
// 		// _.camelCase(name) 注册驼峰形式的，保证 yhInput 可以用，yh-input 也可以用
// 		app.component(_.camelCase(name), (components[key] as any).default);
// 	});
// }
