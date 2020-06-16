//注册
<template>
  <div class="loginStyle">
    <el-form ref="form" :model="form" :rules="rules" class=".loginContainer">
      <h3 class="loginTitle">欢迎光临小秦后台管理系统</h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <div class="drink">
        <el-form-item>
          <el-button @click="register">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="Jump">登录</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    register() {
      this.$refs.form.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/register", {
              username: this.form.username,
              password: this.form.password
            })
            .then(res => {
              if (res.data.code === 200) {
                //注册成功
                this.$message.success("注册成功");
                this.$router.push("/loyo");
              } else {
                this.$message.error(res.data, message);
                this.mseeage = "";
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("表单验证有误,请检查");
          this.mseeage = "";
        }
      });
    },
    Jump() {
      this.$router.push("/loyo");
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
.loginStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/2.gif");
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
  height: 306px;
  padding: 15px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle {
  margin: 15px auto 20px auto;
  text-align: center;
  color: #ebc1e9;
}

.loginRemember {
  text-align: left;
  margin: 0px 0px 15px 0px;
}
.drink {
  display: flex;
  justify-content: space-around;
}
</style>