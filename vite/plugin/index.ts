import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { setupMockPlugin } from "./mock";
import autoImport from "./autoimport";

export function setupPlugins(isBuild: boolean, env: ViteEnv) {
	const plugins: Plugin[] = [vue()];
	plugins.push(setupMockPlugin(isBuild));
	autoImport(plugins);
	return plugins;
}
