import { createApp } from 'vue'
import App from './App.vue'
import router,{setupRouter} from './router'


async function bootStrap(){
    const app = createApp(App)
    setupRouter(app)
    // 等待路由都加载完毕了，再挂载我们的页面
    await router.isReady()
    app.mount('#app')
}

bootStrap()