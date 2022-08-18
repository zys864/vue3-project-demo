import './style.css';
import 'uno.css'
import { createApp } from "vue";
import "./style.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import App from "./App.vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { worker } from './mocks/browser';

worker.start()

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus);
app.mount("#app");