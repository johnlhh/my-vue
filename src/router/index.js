import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/pages/Dashboard'
import Layout from '@/components/Layout'
import UserList from '@/components/pages/user/UserList'
import UserDetail from '@/components/pages/user/UserDetail'
import UserEdit from '@/components/pages/user/UserEdit'


Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/{
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Dashboard',
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/user',
      component: Layout,
      redirect: '/user/list',
      name: 'UserList',
      children: [
        {
          path: 'list',
          component: UserList
        },
        {
          path: 'detail',
          component: UserDetail
        },
        {
          path: 'edit',
          component: UserEdit
        }
      ]
    }

  ]
})
