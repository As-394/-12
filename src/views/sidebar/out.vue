import axios from 'axios';
<template>
  <div class="loginStyle">
    <h3>期待您的下次光临</h3>
&nbsp;&nbsp;&nbsp;

    <el-button type="primary" @click="Out">确认退出</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    Out() {
      this.$confirm("您正在退出小秦后台管理系统，是否确认退出", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "感谢您的到来 欢迎下次光临"
          });
          localStorage.removeItem("user");
          this.$router.push("/loyo");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.loginStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/3.jpg");
  background-size: 100% 100%;
  width: 88.2%;
  height: 100%;
  bottom: 0px;
  position: absolute;
  left: 201px;
  top: 0;
}
</style>