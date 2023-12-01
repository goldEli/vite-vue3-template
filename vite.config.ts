import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import consoleHelper from "vite-plugin-console-helper";

export default defineConfig(({ mode }) => {
  console.log("mode:", mode);
  return {
    base: "./",
    plugins: [
      consoleHelper({
        splitBy: "\n",
        preTip: " 👉",
        enableFileName: false, // or enableFileName: { enableDir: false}
      }),
      vue(),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    // define: {
    //   "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
    // },
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: 3000,
      // 监听所有地址
      host: "0.0.0.0",
      // 服务启动时是否自动打开浏览器
      open: false,
      // 允许跨域
      cors: true,
      // 自定义代理规则
      proxy: {},
    },
    build: {
      // 设置最终构建的浏览器兼容目标
      target: "es2015",
      // 构建后是否生成 source map 文件
      sourcemap: false,
      //  chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : [],
    },
  };
});
