<template>
  <div style="margin-top:30px">
      <el-form  label-width="80px" size="mini">
        <el-form-item label="姓名">
            <el-input v-model="name" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="所在城市">
            <el-input v-model="city" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
            <el-input v-model="phonenumber" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="任职学校">
            <el-input v-model="school" style="width:200px"></el-input>
        </el-form-item>
        <el-form-item label="任教年级" style="width:200px">
            <el-select v-model="grade" placeholder="请选择年级">
            <el-option label="一年级" value="一年级"></el-option>
            <el-option label="二年级" value="二年级"></el-option>
            <el-option label="三年级" value="三年级"></el-option>
            <el-option label="四年级" value="四年级"></el-option>
            <el-option label="五年级" value="五年级"></el-option>
            <el-option label="六年级" value="六年级"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="任教科目" style="width:200px">
            <el-select v-model="subject" placeholder="请选择科目">
            <el-option label="语文" value="语文"></el-option>
            <el-option label="数学" value="数学"></el-option>
            <el-option label="英语" value="英语"></el-option>
            <el-option label="体育" value="体育"></el-option>
            <el-option label="音乐" value="音乐"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="教师身份" style="width:200px">
            <el-select v-model="status" placeholder="请选择身份">
            <el-option label="普通教师" value="普通教师"></el-option>
            <el-option label="特级教师" value="特级教师"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="辅导形式">
            <el-radio-group v-model="situation">
            <el-radio label="线上辅导"></el-radio>
            <el-radio label="线下辅导"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="意向科目">
            <el-input style="width:200px" v-model="introduce"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="add" >立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
import router from '@/router'
export default {
    name:'MyInfo',
    data() {
      return {
        
          name: '',
          sex:'',
          city:'',
          phonenumber:'',
          school: '',
          grade:'',
          subject: '',
          status: '',
          situation:'',
          introduce: ''
 
      }
    },
    /* computed:{
        Changed(){
            return this.$store.state.name
        }
    }, */
    methods: {
      add() {
        const userName = this.name
        const userSex = this.sex
        const userCity = this.city
        const userPhonenumber = this.phonenumber
        const userSchool = this.school
        const userGrade = this.grade
        const userSubject = this.subject
        const userStatus = this.status
        const userSituation = this.situation
        const userIntroduce = this.introduce
        this.$store.commit("ADDName",userName)
        this.$store.commit("ADDSex",userSex)
        this.$store.commit("ADDCity",userCity)
        this.$store.commit("ADDPhonenumber",userPhonenumber)
        this.$store.commit("ADDSchool",userSchool)
        this.$store.commit("ADDGrade",userGrade)
        this.$store.commit("ADDSubject",userSubject)
        this.$store.commit("ADDStatus",userStatus)
        this.$store.commit("ADDSituation",userSituation)
        this.$store.commit("ADDIntroduce",userIntroduce)
        this.$router.push('/match')
      }
    }
}
</script>

<style>

</style>