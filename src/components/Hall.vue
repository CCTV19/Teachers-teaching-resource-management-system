<template>
    <div class="flexcontainer">
        
                <el-card class="box-card" :body-style="{ }">
                    <div slot="header" class="clearfix">
                        <span>郑老师</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="open">点击匹配</el-button>
                    </div>
                    <div  class="text item">
                        {{'所在城市：江门'}}
                    </div>
                    <div  class="text item">
                        {{'任职学校：江门市启明小学'}}
                    </div>
                    <div  class="text item">
                        {{'任教年级：三年级'}}
                    </div>
                    <div  class="text item">
                        {{'任教科目：语文'}}
                    </div>
                    <div  class="text item">
                        {{'联系方式：135*****67'}}
                    </div>
                </el-card>
            
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>杨老师 (特级教师)</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="open">点击匹配</el-button>
                    </div>
                    <div  class="text item">
                        {{'所在城市：深圳'}}
                    </div>
                    <div  class="text item">
                        {{'任职学校：深圳市沙塘布学校'}}
                    </div>
                    <div  class="text item">
                        {{'任教年级：六年级'}}
                    </div>
                    <div  class="text item">
                        {{'任教科目：体育'}}
                    </div>
                    <div  class="text item">
                        {{'联系方式：151******00'}}
                    </div>
                </el-card>
            
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>龚老师</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="open">点击匹配</el-button>
                    </div>
                    <div  class="text item">
                        {{'所在城市：广州'}}
                    </div>
                    <div  class="text item">
                        {{'任职学校：广州大学附属小学'}}
                    </div>
                    <div  class="text item">
                        {{'任教年级：五年级'}}
                    </div>
                    <div  class="text item">
                        {{'任教科目：数学'}}
                    </div>
                    <div  class="text item">
                        {{'联系方式：130******65'}}
                    </div>
                </el-card>
           
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>李老师</span>
                        <el-button style="float: right; padding: 3px 0" type="text" @click="open">点击匹配</el-button>
                    </div>
                    <div  class="text item">
                        {{'所在城市：深圳'}}
                    </div>
                    <div  class="text item">
                        {{'任职学校：深圳小学'}}
                    </div>
                    <div  class="text item">
                        {{'任教年级：六年级'}}
                    </div>
                    <div  class="text item">
                        {{'任教科目：英语'}}
                    </div>
                    <div  class="text item">
                        {{'联系方式：134******55'}}
                    </div>
                </el-card>
           
    </div>
</template>

<script>
export default {
    name:'Hall',
    methods: {
      open() {
        this.$confirm('是否确认组成互助小组?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '组成互助小组成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      }
    }
}
</script>

<style scoped>
    /* * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } */

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 10px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        /* width: 100%; */
        width:345px;
    }

    .flexcontainer{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    .el-card {
        
        transition: all .5s;
    }
    .el-card:hover{
        margin-top: -5px;
    }
    .el-row{
        margin-top: 15px;
        /* display:flex;
        flex-wrap: wrap;
        flex-direction: row; */
    }
    /* @media screen and (max-width: 425px) {
    body{
       
       width: 425px;
       
      } 
    }  */
</style>