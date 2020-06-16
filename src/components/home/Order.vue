<template>
  <div class="tyu">
    <div class="gdf">
      <el-col :span="12">
        <el-card shadow="hover">
          <el-table :data="tableData" style="width:600px;">
            <el-table-column prop="num" label="Order_No" width="300px"></el-table-column>
            <el-table-column prop="price" label="￥price" width="180px"></el-table-column>
            <el-table-column prop="status" label="status">
              <template slot-scope="scope">
                <div v-if="scope.row.status===0">
                  <el-tag type="danger">pending</el-tag>
                </div>
                <div v-if="scope.row.status===1">
                  <el-tag type="success">success</el-tag>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
       <el-col :span="6">
    <el-card shadow="hover">
  123456
    </el-card>
  </el-col>
      <el-col :span="6">
        <el-card shadow="hover" style="height:535px;">
          <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt />
          <div v-for="(item) in obj" :key="item.name">
            <div class="dsa">
              <div>{{item.name}}</div>
              <el-progress
                :percentage="item.progress*100"
                status="success"
                v-if="item.progress === 1"
              ></el-progress>
              <el-progress :percentage="item.progress*100" v-else :color="customColors"></el-progress>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [],
      obj: [],
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c" },
        { color: "#e6a23c" },
        { color: "#5cb87a" },
        { color: "#1989fa" },
        { color: "#6f7ad3" }
      ]
    };
  },
  components: {},
  methods: {
    getdata() {
      // 列表请求
      axios
        .get("/api/orderData")
        .then(res => {
          this.tableData = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
      // 进度条请求
      axios
        .get("/api/progress")
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
    this.getdata();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>
.tyu {
  margin-top: 30px;
}
.gdf {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
.top-2 {
  width: 435px;
  height: 500px;
  background: white;
  margin-top: 20px;
  margin-left: 20px;
  box-shadow: 1px 1px 10px #ccc;
}
.hai {
  text-align: left;
  margin-left: 20px;
  margin-top: 10px;
}
.hei {
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
}
.jjk {
  width: 435px;
  height: 60px;
  background: transparent;
  border-bottom: 1px solid #ccc;
  position: relative;
  display: flex;
}
.jjk {
  font-size: 24px;
}
.kk {
  position: absolute;
  left: 24px;
  top: 20px;
}
.kk-1 {
  position: absolute;
  right: 20px;
  top: 30px;
}
.man {
  width: 35px;
  height: 25px;
  margin-top: 18px;
  
}
.pos {
  text-align: left;
  margin-left: 20px;
  display: flex;
}
.mc {
  margin-left: 40px;
  margin-top: 28px;
  font-size: 20px;
}
.fei {
  width: 435px;
  height: 70px;
  border-top: 1px solid #cccccc;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wu {
  width: 60px;
  height: 30px;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
