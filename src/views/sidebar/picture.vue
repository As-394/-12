<template>
  <div>
    <el-card shadow="always">
      <h2>支持拖拽</h2>
      <div class="item">Element UI自带上传组件</div>

      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>

      <h2 class="">支持裁剪</h2>
      
      <div class="p2 item m-t2 m-b2">vue-image-crop-upload</div>
      <div id="app">
        
        <el-button type="primary" class="btn" @click="toggleShow">上传图片</el-button>
        
        <my-upload
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
          :width="200"
          :height="200"
          img-format="png"
          :size="size"
          langType="zh"
          :noRotate="false"
          field="Avatar1"
          url="https://httpbin.org/post"
        ></my-upload>
        <img :src="imgDataUrl" />
        
      </div>
    </el-card>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  data() {
    return {
      imgDataUrl: "",
      show: false,
      size: 2.1
    };
  },
  components: {
    "my-upload": myUpload
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.item {
  background: rgb(238, 238, 238);
  margin-top: 20px;
  margin-bottom: 20px;
}
obj{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
