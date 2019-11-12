import Vue from 'vue'
import Router from 'vue-router'
import Modal from './views/Modal.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modal',
      component: Modal
    },
    {
      path: '/list',
      name: 'list',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () =>
        import(/* webpackChunkName: "cards" */ './views/Cards.vue')
    },
    {
      path: '/simple',
      name: 'simple',
      component: () =>
        import(/* webpackChunkName: "simple" */ './views/Simple.vue')
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: () =>
        import(/* webpackChunkName: "stagger" */ './views/Stagger.vue')
    }
  ]
})
