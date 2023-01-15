import { RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
    {
        path:'/',
        component:()=>import('../layouts/admin.vue'),
        children:[
            {
                path:'admin',
                component:()=>import('../views/home.vue')
            }
        ]
    }
]

export default routes