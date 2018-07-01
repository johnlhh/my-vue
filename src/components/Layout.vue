
<template>
  <el-container>
    <el-aside width="200px" >
      <aside-bar></aside-bar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <header-bar></header-bar>
      </el-header>

      <el-main>
        <app-main></app-main>
      </el-main>
      <!--<el-footer>
        <footer-bar></footer-bar>
      </el-footer>-->
    </el-container>
  </el-container>
</template>



<style>

/*  .el-header{
    color: #333;
    line-height: 60px;
  }



  .el-footer{
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>



<script>
  import AsideBar from "./Aside.vue";
  import HeaderBar from "./Header.vue";
  import FooterBar from "./Footer.vue";
  import AppMain from "./AppMain.vue";

  export default {
    name: 'layout',
    components: {
      AsideBar,
      HeaderBar,
      FooterBar,
      AppMain
    },
    computed: {

    }
  }
</script>
