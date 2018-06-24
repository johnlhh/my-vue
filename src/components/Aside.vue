<template xmlns:v-bind="http://www.w3.org/1999/xhtml">


    <el-menu :router="true">
      <template v-for="menu in menuList">

        <template v-if="!menu.children">
          <el-menu-item :index="menu.index">
            <template slot="title"><i :class="menu.icon"></i>{{menu.title}}</template>
          </el-menu-item>
        </template>

        <template v-else>
          <el-submenu :index="menu.index">
            <template slot="title"><i :class="menu.icon"></i>{{menu.title}}</template>
            <template v-for="subMenu in menu.children">
              <el-menu-item :index="subMenu.index">{{subMenu.title}}</el-menu-item>
            </template>
          </el-submenu>
        </template>

      </template>

    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [{
          index: '/',
          url: 'http://www.baidu.com',
          icon: 'el-icon-menu',
          title: 'Dashboard'
        },{
          index: 'menu2',
          url: 'http://www.baidu.com',
          icon: 'el-icon-message',
          title: '消息',
          children: [{
            index: 'menu2-1',
            url: 'www.baidu.com',
            title: '未读'
          }]
        },{
          index: 'menu3',
          url: 'http://www.baidu.com',
          icon: 'el-icon-setting',
          title: '设置',
          children: [{
            index: 'menu3-1',
            url: 'www.baidu.com',
            title: '密码'
          }]
        },{
          index: '/user',
          url: '/user',
          icon: 'el-icon-setting',
          title: '用户管理'
        }]
      }
    }
  };
</script>
