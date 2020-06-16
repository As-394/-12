//登录
<template>
 <div class="loginStyle">
<el-form class="loginContainer" :model="form" :rules="rules" ref="form">
<h3 class="loginTitle">欢迎光临小秦后台管理系统</h3>
<el-form-item label="用户名" prop="username">
<el-input v-model="form.username"></el-input>
</el-form-item>
<el-form-item label="密码" prop="password">
<el-input type="password" v-model="form.password" autocomplete="off"></el-input>
</el-form-item>
<div class="card">
<el-form-item label="验证码" prop="code">
<el-input v-model="form.code"></el-input>
</el-form-item>
<div v-html="verifycode" @click="getCode"></div>
</div>
<div class="drink">
<el-form-item>
<el-button @click="login">登录</el-button>
</el-form-item>
<el-form-item>
<el-button @click="Jump">注册</el-button>
</el-form-item>
</div>
</el-form>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       form:{
         username:'',
         password:'',
         code:'',
         validate:null
       },
       verifycode:'',
       rules:{
         username:[{required:true,message:'用户名不能为错误',trigger:'blur'}],
         password:[{required:true,message:'密码不正确',trigger:'blur'}],
         code:[{required:true,massage:'验证码有误',trigger:'blur'}],
       }
     }
   },
   methods: {
     login(){
       this.$refs.form.validate(valid=>{
         if(valid){
           axios.post('/api/user/login',{
             username:this.form.username,
             password:this.form.password,
             code:this.form.code,
           }).then(res=>{
             if(res.data.code === 200){
               this.$message.success('恭喜你登录成功')
                localStorage.setItem('user',JSON.stringify(res.data.data[0]))
               this.$router.push('/')
             }else{
               this.$message.error(res.data,message)
               this.mseeage=""
             }
           }).catch(err=>{
           
           })
         }else{
           this.$message.error('表单验证有误，请检查')
           this.mseeage="";
         }
       })
     },
     getCode(){
       console.log(1)
       axios.get('/api/captcha').then(res=>{
         console.log(res)
         this.verifycode =res.data
       }).catch(err=>{
         console.log(err)
       })
     },
     Jump(){
       this.$router.push('/register')
     }
   },
   mounted() {
     this.getCode()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.loginStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/1.gif');

  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.loginContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 489px;
  height: 466px;
  padding: 15px 35px 15px 35px;
  background: rgba(255,255,255,0.1);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 15px auto 20px auto;
  text-align: center;
  color: #ebc1e9;
}
.card{
  width: 100%;
  display: flex;
  justify-content:space-around;
}
.drink{
  display: flex;
  justify-content:space-around;
}
</style>