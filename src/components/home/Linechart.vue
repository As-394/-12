
<template>
  <div>
    <div class="hour">
      <el-col :span="5">
        <el-card shadow="hover" style="height:120px ;display: flex;justify-content: center; align-items: center;">
         <i class=" rw iconfont icon-renqunfenxi"></i>
          <div class="http">New Visits</div>
          <countTo :startVal ='startVal' :endVal ='obj.visits' :duration ='3000'> </countTo>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" style="height:120px;display: flex;justify-content: center; align-items: center;">
        <i class=" rw-a  iconfont icon-xiaoxi"></i>
       <div class="http">Messages</div>
          <countTo class="hppt" :startVal ='startVal' :endVal ='obj.messages' :duration ='3000'> </countTo>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" style="height:120px;display: flex;justify-content: center; align-items: center;">
        <i class=" rw-b iconfont icon-qian"></i>
        <div class="http">Purchases</div>
          <countTo class="hppt" :startVal ='startVal' :endVal ='obj.purchases' :duration ='3000'> </countTo>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover" style="height:120px;display: flex;justify-content: center; align-items: center;">
        <i class=" rw-c iconfont icon-gouwuche"></i>
        <div class="http">Shoppings</div>
          <countTo class="hppt" :startVal ='startVal' :endVal ='obj.shopping' :duration ='3000'> </countTo>
        1
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import countTo from "vue-count-to";
export default {
  name: "home",
  props: {},
  components: {
    //计算器
    countTo
  },
  data() {
    return {
      // 计数器
      obj: {},
      startVal: 0
    };
  },
  methods: {
    // 计数器发送请求
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          this.obj = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // 计数器
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.hour {
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
}
.rw {
    font-size: 50px;
    color: rgb(68,200,197);
  }
  .rw-a {
     font-size: 50px;
     color: rgb(63,164,244);
     
  }
  .rw-b {
     font-size: 50px;
     color: rgb(244,108,131);
   
  }
  .rw-c {
     font-size: 50px;
     color: rgb(254,186,133);
     
  }
  .http {
    color: #999;
  }
</style>