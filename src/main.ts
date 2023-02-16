import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElIcons from '@element-plus/icons'

const app = createApp(App)
for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name])
}

app
    .use(ElementPlus)
    .use(router)
    .mount('#app')
