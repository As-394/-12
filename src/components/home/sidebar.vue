
<!--侧边栏-->
<template>
  <div style="width: 201px">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
       router
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="rgb(52,64,85)"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
         <div class="wet">
          <div v-for="(item,index) in arr" :key="index">
            <el-menu-item :index="item.index">
              <i :class="item.log"></i>
              {{item.name}}
            </el-menu-item>
          </div>
         </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: [
        { name: "首页", log: "el-icon-location", index: "/" },
        { name: "分页表格", log: "el-icon-menu", index: "/paging" },
        { name: "标签页", log: "el-icon-document", index: "/label" },
        { name: "图片上传", log: "el-icon-check", index: "/picture" },
        { name: "发布文章", log: "el-icon-message", index: "/Post" },
        { name: "已发布", log: "el-icon-shopping-bag-2", index: "/Publishing" },
        { name: "导出excel", log: "el-icon-setting", index: "/Import" },
        { name: "统计", log: "el-icon-orange", index: "/Statistics" },
        { name: "退出登录", log: "el-icon-delete-solid", index: "/out" }
      ]
    };
  },

  methods: {
  
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo {
    position: fixed;
  height: 100%;
  width: 201px;
   top: 50px;
  bottom: 0;
  left: 0;
}
.wet{
  position: fixed;
  height: 100%;
  width: 201px;
  top: 50px;
  bottom: 0;
  left: 0;
}
</style>