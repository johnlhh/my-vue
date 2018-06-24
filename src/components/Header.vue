<template>

  <div>

    <div style="float:right">
      小牛哥
    </div>
    <div style="float:right">
      <img class="user-avatar" :src="logo">
    </div>

    <div class="clear myLine"></div>

  </div>

</template>


<style>

  .clear{
    clear: both;
  }

  .myLine{
    background: #b4bccc;
    height: 1px;

  }

  .user-avatar {
    margin-top: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

</style>

<script>

  import logo from '@/assets/user.jpg'

  export default {
    data() {
      return {
        logo
      }
    }
  };
</script>



