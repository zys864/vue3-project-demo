import { resolve } from "path";
import Unocss from "unocss/vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";
import removeConsole from "vite-plugin-remove-console";

export function getPluginsList(command) {
  const prodMock = true;
  return [
    vue(),

    Unocss(),
    // 线上环境删除console
    removeConsole({ external: ["src/assets/iconfont/iconfont.js"] }),
    // mock支持
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
      prodEnabled: command !== "serve" && prodMock,
      injectCode: `
      import { server } from './mocks/servers'

      beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
      afterAll(() => server.close())
      afterEach(() => server.resetHandlers())
      `,
      logger: false
    }),
  ];
}
