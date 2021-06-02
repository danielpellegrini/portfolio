import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'

Vue.use(VueRouter)

// const routes = []

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        a: About,
        p: Projects
      }
    }
    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   component: Projects
    // }
  ]
})

export default router
