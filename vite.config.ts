import { defineConfig } from "vite";
import { resolve } from "path";
import Components from 'unplugin-vue-components/vite';
import vue from "@vitejs/plugin-vue";
import consoleHelper from "vite-plugin-console-helper";
import postcsspxtoviewport from "postcss-px-to-viewport";
import { VantResolver } from "@vant/auto-import-resolver";

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
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: "px", // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
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
      port: 5000,
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
