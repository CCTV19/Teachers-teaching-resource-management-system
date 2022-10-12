import Vue from 'vue'
 
import Vuex from 'vuex'
 
Vue.use(Vuex);

const actions = {

}

const mutations = {
  ADDName(state,value){
    state.name = value
  },
  ADDSex(state,value){
    state.sex = value
  },
  ADDCity(state,value){
    state.city = value
  },
  ADDPhonenumber(state,value){
    state.phonenumber = value
  },
  ADDSchool(state,value){
    state.school = value
  },
  ADDGrade(state,value){
    state.grade = value
  },
  ADDSubject(state,value){
    state.subject = value
  },
  ADDStatus(state,value){
    state.status = value
  },
  ADDSituation(state,value){
    state.situation = value
  },
  ADDIntroduce(state,value){
    state.introduce = value
  }
}

const state = {
  name: '',
  sex:'',
  city:'',
  phonenumber:'',
  school: '',
  grade:'',
  subject: '',
  status: '',
  situation:'',
  introduce: '',
}

export default new Vuex.Store({
  // 数据仓库,类似vue组件里面的data
  actions,
  mutations,
  state,
});