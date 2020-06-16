<template>
  <div>
    <div class="t-head">
      <div class="header">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </div>
    <div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title" :rules="[{required: true,message: '请输入文章标题', }]">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract" :rules="[{required: true,message: '请输入文章摘要', }]">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div class="briefly">
          <el-form-item label="作者" prop="author" :rules="[{required: true,message: '请输入作者', }]">
            <el-input v-model="ruleForm.artsummary"></el-input>
          </el-form-item>
          <el-form-item label="类目" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.category" placeholder="请选择">
              <el-option
                v-for="(item,index) in category"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.source" placeholder="请选择">
              <el-option
                v-for="(item,index) in source"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="star" :rules="[{required: true,}]">
            <el-select v-model="ruleForm.star" placeholder="请选择">
              <el-option
                v-for="(item,index) in star"
                :key="index"
                :label="item.lable"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" prop="times">
            <el-date-picker
              type="datetime"
              placeholder="选择日期时间"
              v-model="ruleForm.date"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div id="main">
      <mavon-editor v-model="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PublishArticle",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        date: ""
      },
      category: [
        {
          label: "vue",
          value: "vue"
        },
        {
          label: "React",
          value: "React"
        },
        {
          label: "Node.js",
          value: "Node.js"
        },
        {
          label: "性能优化",
          value: "性能优化"
        },
        {
          label: "JavaScript",
          value: "JavaScript"
        },
        {
          label: "小程序",
          value: "小程序"
        },
        {
          label: "工具类",
          value: "工具类"
        },
        {
          label: "其他",
          value: "其他"
        }
      ],
      source: [
        {
          label: "原创",
          value: "原创"
        },
        {
          label: "转载",
          value: "转载"
        },
        {
          label: "国外",
          value: "国外"
        }
      ],
      star: [
        {
          label: "1颗星",
          value: "1颗星"
        },
        {
          label: "2颗星",
          value: "2颗星"
        },
        {
          label: "3颗星",
          value: "3颗星"
        },
        {
          label: "4颗星",
          value: "4颗星"
        },
        {
          label: "5颗星",
          value: "5颗星"
        }
      ],
      text: ""
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.t-head {
  padding: 5px;
}
.header {
  width: 100%;
  height: 50px;
  background: rgb(89, 165, 134);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
}
.briefly {
  display: flex;
}
</style>