type Recordable<T = any> = Record<string, T>;
interface ViteEnv {
    VITE_PORT: number;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY_DOMAIN: string;
    VITE_PROXY_DOMAIN_REAL: string;
    VITE_ROUTER_HISTORY: string;
    VITE_LEGACY: boolean;
  }
// 处理环境变量
const warpperEnv = (envConf: Recordable): ViteEnv => {
    // 此处为默认值，无需修改
    const ret: ViteEnv = {
      VITE_PORT: 8848,
      VITE_PUBLIC_PATH: "",
      VITE_PROXY_DOMAIN: "",
      VITE_PROXY_DOMAIN_REAL: "",
      VITE_ROUTER_HISTORY: "",
      VITE_LEGACY: false
    };
  
    for (const envName of Object.keys(envConf)) {
      let realName = envConf[envName].replace(/\\n/g, "\n");
      realName =
        realName === "true" ? true : realName === "false" ? false : realName;
  
      if (envName === "VITE_PORT") {
        realName = Number(realName);
      }
      ret[envName] = realName;
      if (typeof realName === "string") {
        process.env[envName] = realName;
      } else if (typeof realName === "object") {
        process.env[envName] = JSON.stringify(realName);
      }
    }
    return ret;
  };
  
  // 跨域代理重写
  const regExps = (value: string, reg: string): string => {
    return value.replace(new RegExp(`^${reg}`, "g"), "");
  };
  
  // 环境变量
  const loadEnv = (): ViteEnv => {
    return import.meta.env;
  };
  
  export { warpperEnv, regExps, loadEnv };