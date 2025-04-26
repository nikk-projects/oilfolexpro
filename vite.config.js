import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
	root: ".",
	build: {
		outDir: "build",
		sourcemap: true,
		assetsDir: "assets",
		rollupOptions: {
			input: "index.html",
		},
		minify: "esbuild",
		terserOptions: {
			format: {
				comments: false,
			},
		},
	},
	esbuild: {
		drop: ["console", "debugger"],
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: "",
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "assets"),
		},
	},
});
