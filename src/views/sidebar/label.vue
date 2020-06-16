<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="`未读消息(${One})`" name="first">
        <div v-if="arr.length>0">
          <el-card shadow="always">
            <div v-for="(item,index) in arr" :key="index" class="item">
              <div>{{item.name}}</div>
              <div class="ipo">
                <div class="uhg">{{item.time}}</div>
                <el-button type="info" @click="read(item,index)">标记已读</el-button>
              </div>
            </div>
            <el-button type="primary" @click="reads">全部标为已读</el-button>
          </el-card>
        </div>
        <div v-else class="ewq">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane :label="Two" name="second">
        <div v-if="list.length>0">
          <el-card shadow="always">
            <div v-for="(item,index) in list" :key="index" class="item">
              <div>{{item.name}}</div>
              <div class="ddqa">
                <div class="uhg">{{item.time}}</div>
                <el-button type="info" @click="deletel(item,index)">删除</el-button>
              </div>
            </div>
            <el-button type="danger" @click="deletels">删除全部</el-button>
          </el-card>
        </div>
        <div v-else class="ewq">暂无数据</div>
      </el-tab-pane>
      <el-tab-pane :label="`回收站 (${Three})`" name="third">
        <div v-if="del.length>0">
          <el-card shadow="always">
            <div v-for="(item,index) in del" :key="index" class="d-f j-c-s-b p1 item m-b2">
              <div>{{item.name}}</div>
              <div class="ipo">
                <div class="uhg">{{item.time}}</div>
                <el-button type="warning" @click="reduction(item,index)">还原</el-button>
              </div>
            </div>
            <el-button type="info" @click="empty">清空回收站</el-button>
          </el-card>
        </div>
        <div v-else class="ewq">暂无数据</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      activeName: "first",
      arr: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          name: "今晚12点整发大红包,先到先得",
          time: "2018-04-19 21:00:00"
        }
      ],
      list: [
        {
          name: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        }
      ],
      del: [
        {
          name: "[系统通知]你的优惠卷已过期",
          time: "2018-04-19 20:00:00"
        }
      ]
    };
  },
  components: {},
  methods: {
    deletel(item, index) {
      this.list.splice(index, 1);
      this.del.push(item);
    },
    deletels() {
      this.del=[...this.list,...this.del]
      this.list=[]; 
    },
    read(item, index) {
      this.arr.splice(index, 1);
      this.list.push(item);
    },
    reads() {
      this.list = this.arr.concat(this.list);
      this.arr=[]
    },
    empty() {
      this.del=[]
    },
    reduction(item, index) {
      this.del.splice(index, 1);
      this.list.push(item);
    }
  },
  mounted() {},
  watch: {},
  computed: {
    One(){
      return this.arr.length
    },
    Two(){
      return '已读消息' + '(' + this.list.length + ')'
    },
    Three(){
      return this.del.length
    }
  }
};
</script>

<style scoped lang='scss'>
.item {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  position: 10px;
  margin-bottom: 20px;
}
.ipo{
 display: flex;  
 align-items: center; 
}
.uhg{
    margin-right: 20px;
}
.ewq{
    display: flex;
    justify-content: center;
    position: 20px;
}
.ddqa{
    display: flex;
    align-items: center;
}
</style>
