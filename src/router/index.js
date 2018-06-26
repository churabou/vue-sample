import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Top from '@/components/pages/Top'
import Profile from '@/components/pages/Profile'
import Skill from '@/components/pages/Skill'
import Output from '@/components/pages/Output'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/outputs',
      name: 'Output',
      component: Output
    }
  ]
})
