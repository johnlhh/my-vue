<template>

  <el-row class="tac">
    <el-col :span="24">
      <el-menu router :default-active="currentRoutePath" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <template v-for="(issue,index) in $router.options.routes">
          <template v-for="(item,index) in issue.children">

            <template v-if="item.leaf&&item.children&&item.children.length">
              <el-menu-item :index="item.children[0].path">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.children[0].name}}</span>
              </el-menu-item>
            </template>
            <template v-else-if="!item.leaf">

              <el-submenu :index="item.path">
                <template slot="title">
                  <i :class="item.iconCls"></i>
                  <span>{{item.name}}</span>
                </template>
                <el-menu-item-group>
                  <template v-for="term in item.children">
                    <template v-if="term.menuShow">
                      <el-menu-item :key="term.path" :index="term.path">{{term.name}}</el-menu-item>
                    </template>
                  </template>
                </el-menu-item-group>
              </el-submenu>
            </template>
          </template>
        </template>
      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    data() {
      return {

      }
    },
    computed: {
      currentRoutePath () {
        return this.$route.meta.menuIndex
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>


