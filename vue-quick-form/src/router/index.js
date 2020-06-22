import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import ListPage from '@/components/ListPage'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            name: 'root',
            path: '/',
            component: layout,
            redirect:{
                name: 'beautyGirl'
            },
            children:[
                {
                    name: 'beautyGirl',
                    path: 'beauty-girl',
                    component: ListPage
                }
            ]
        }
    ]
})
export default router