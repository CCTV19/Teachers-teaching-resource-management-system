<template>
<div>
    <div class="flex">
        <el-empty v-show="isShow" description="暂无匹配信息"></el-empty>
        <el-row v-show="!isShow" :gutter='20'>
            <el-col :span="12">
                <el-descriptions title="我的信息" :column="2" border>
                    <el-descriptions-item label="姓名" label-class-name="my-label" content-class-name="my-content">{{name}}</el-descriptions-item>
                    <el-descriptions-item label="性别">{{sex}}</el-descriptions-item>
                    <el-descriptions-item label="联系方式">{{phonenumber}}</el-descriptions-item>
                    <el-descriptions-item label="任职学校">{{school}}</el-descriptions-item>
                    <el-descriptions-item label="所在城市">{{city}}</el-descriptions-item>
                    <el-descriptions-item label="任教年级">{{grade}}</el-descriptions-item>
                    <el-descriptions-item label="任教科目">{{subject}}</el-descriptions-item>
                    <el-descriptions-item label="教师身份">{{status}}</el-descriptions-item>
                    <el-descriptions-item label="辅导形式">{{situation}}</el-descriptions-item>
                    <el-descriptions-item label="意向科目">{{introduce}}</el-descriptions-item>
                </el-descriptions>
            </el-col>
            <el-col :span="12">
                <el-descriptions title="匹配教师信息" :column="2" border>
                    <el-descriptions-item label="姓名" label-class-name="my-label" content-class-name="my-content">{{pipei.name}}</el-descriptions-item>
                    <el-descriptions-item label="性别">{{pipei.sex}}</el-descriptions-item>
                    <el-descriptions-item label="联系方式">{{pipei.phonenumber}}</el-descriptions-item>
                    <el-descriptions-item label="任职学校">{{pipei.school}}</el-descriptions-item>
                    <el-descriptions-item label="所在城市">{{pipei.city}}</el-descriptions-item>
                    <el-descriptions-item label="任教年级">{{pipei.grade}}</el-descriptions-item>
                    <el-descriptions-item label="任教科目">{{pipei.subject}}</el-descriptions-item>
                    <el-descriptions-item label="教师身份">{{pipei.status}}</el-descriptions-item>
                    <el-descriptions-item label="辅导形式">{{pipei.situation}}</el-descriptions-item>
                    <el-descriptions-item label="意向科目">{{pipei.introduce}}</el-descriptions-item>
                </el-descriptions>
            </el-col>
        </el-row>
    </div>
    <div class="but">
        <el-button v-show="!isShow" 
                    type="primary" plain 
                    style="margin-right:20px"
                    @click="match">点击匹配</el-button>
        <el-button v-show="!isShow" type="primary" plain @click="queren">点击组成小组</el-button>
    </div>
</div>
</template>

<script>
import tData from '../static/teacherData'
import {mapState} from 'vuex'
export default {
    name:'Match',
    data(){
        return{
            isShow:true,
            pipeiData:'',
            pipei:'',
            pipeis:[]
        }
    },
    methods:{
        match(){
            /* return this.pipeiData = JSON.parse(localStorage.getItem('teacherData'))
             */
            const a = JSON.parse(localStorage.getItem('teacherData'))
            const b = JSON.parse(localStorage.getItem('teacherData1'))
            this.pipeis.unshift(a)
            this.pipeis.unshift(b)
            console.log(this.pipeis)
            this.pipeiData = this.pipeis.filter((pipei)=>{
                return pipei.city == this.$store.state.city&&
                pipei.subject==this.$store.state.introduce&&
                pipei.introduce==this.$store.state.subject
            })
            this.pipei = this.pipeiData[0]
            console.log(this.pipeiData)
        },
        queren(){
            this.$confirm('是否确认组成互助小组？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '组成小组成功'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });          
                });
        }
    },
    computed:{
        ...mapState(['name','sex','city','phonenumber','school',
                    'grade','subject','status','situation','introduce']),
    },
    watch:{
        $route(to,from){
            if(from.path == "/myinfo"){
                this.isShow=false
                console.log(this.isShow)
            }
        }
    }  
    
       
}
</script>

<style>
    .el-row{
        margin-top: 30px;
    }
    .but{
        text-align:center;
        margin-top: 80px;
    }
</style>