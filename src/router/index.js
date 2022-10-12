import VueRouter from "vue-router";
import Register from '../components/Register.vue';
import MyInfo from '../components/MyInfo.vue';
import Match from '../components/Match.vue';
import Hall from '../components/Hall.vue';


export default new VueRouter({
    routes:[
        {
            path:'/register',
            component:Register,
           
        },
        {
            path:'/myinfo',
            component:MyInfo,
            meta:{
                isAuth:true,
            },
            beforeEnter:(to,from,next)=>{  //独享路由守卫
                if(to.meta.isAuth){ //判断是否需要鉴权
                    /* const a = JSON.parse(localStorage.getItem('user')) */
                    if(localStorage.getItem('info')===localStorage.getItem('userInfo')){ //对本地的信息进行校验
                        next() //放行
                    }else{
                        alert("您未登录")
                    }
                }else{
                    next()
                }
            }
        },
        {
            path:'/match',
            component:Match,
            meta:{
                isAuth:true,
            },
            beforeEnter:(to,from,next)=>{  //独享路由守卫
                if(to.meta.isAuth){ //判断是否需要鉴权
                    /* const a = JSON.parse(localStorage.getItem('user')) */
                    if(localStorage.getItem('info')===localStorage.getItem('userInfo')){ //对本地的信息进行校验
                        next() //放行
                    }else{
                        alert("您未登录")
                    }
                }else{
                    next()
                }
                 
            }
        },
        {
            path:'/hall',
            component:Hall
        },
    ]
})