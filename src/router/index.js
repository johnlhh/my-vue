import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/pages/Dashboard";
import MyChartJs from "@/components/pages/chartjs/ChartJs";
import Layout from "@/components/Layout";
import Blank from "@/components/Blank";
import UserList from "@/components/pages/user/UserList";
import UserDetail from "@/components/pages/user/UserDetail";
import UserEdit from "@/components/pages/user/UserEdit";


Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '/',
      type: 'dashboard',
      redirect: '/dashboard',
      menuShow: true,
      component: Layout,
      name: 'dashboard',

      children: [
        {
          path: '/dashboard',
          component: Blank,
          name: 'dashboard',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-menu', // 图标样式class
          menuShow: true,
          children: [
            {
              path: '/dashboard',
              component: Dashboard,
              name: 'Dashboard',
              menuShow: true,
              meta: {menuIndex: '/dashboard'}
            }
          ]
        }
      ]
    },
    {
      path: '/axios',
      type: 'dashboard',
      menuShow: true,
      component: Layout,
      name: 'dashboard',

      children: [
        {
          path: '/axios',
          component: Blank,
          name: 'dashboard',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-location', // 图标样式class
          menuShow: true,
          children: [
            {path: '/axios', component: Dashboard, name: 'Axios', menuShow: true, meta: {menuIndex: '/axios'}}
          ]
        }
      ]
    },
    {
      path: '/charts',
      type: 'charts',
      menuShow: true,
      component: Layout,
      redirect: '/charts/chartist',
      name: 'charts',

      children: [
        {
          path: '/charts',
          component: Blank,
          name: 'Charts',
          leaf: false, // 只有一个节点
          iconCls: 'el-icon-picture', // 图标样式class
          menuShow: true,
          children: [
            {
              path: '/charts/chartjs',
              component: MyChartJs,
              name: 'Chartjs',
              menuShow: true,
              meta: {menuIndex: '/charts/chartjs'}
            },
          ]
        }
      ]
    },
    {
      path: '/user',
      redirect: '/user/list',
      type: 'users',
      menuShow: true,
      component: Layout,
      name: 'users',

      children: [
        {
          path: '/user/list',
          component: Blank,
          name: '用户管理1',
          leaf: true, // 只有一个节点
          iconCls: 'el-icon-tickets', // 图标样式class
          menuShow: true,
          children: [
            {path: '/user/list', component: UserList, name: '用户管理', menuShow: true, meta: {menuIndex: '/user/list'}},
            {
              path: '/user/detail',
              component: UserDetail,
              name: '用户详情',
              menuShow: false,
              meta: {menuIndex: '/user/list'}
            },
            {
              path: '/user/edit',
              component: UserEdit,
              name: '用户编辑',
              menuShow: false,
              meta: {menuIndex: '/user/list'}
            }
          ]
        }
      ]
    }

  ]
})

router.beforeEach((to, from, next) => {
  console.log('from:' + from.path + '--->' + 'to:' + to.path)
  next()
});

export default router
