<template>

    <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
        
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="/register">登录</el-menu-item>
        
        <el-submenu :router="true" index="1">
          <template slot="title">个人中心</template>
          <div>
            <el-avatar icon="el-icon-user-solid" size='small' style="margin-left:85px"></el-avatar>
          </div>
          <el-menu-item index="/myinfo" style="text-align:center">我的信息</el-menu-item>
          <el-menu-item index="/match" style="text-align:center">我的匹配</el-menu-item>
          
        </el-submenu>
        
        <el-menu-item index="/hall">匹配大厅</el-menu-item>
    </el-menu>

</template>

<script>
export default {
    name:'Head',
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(val) {
        
      }
    },
}
</script>

<style>
    /* .el-menu{
      display: flex;
      width: 100%;
    } */
    @media screen and (max-width: 425px) {
    body{
       
       width: 425px;
       
      } 
    }
</style>