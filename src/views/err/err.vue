<template>
 <div>
 
<h1><img src="../../assets/2.gif" alt="">
 <el-button type="primary" plain @click="back" class="dv">返回首页</el-button>
</h1>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
back(){
    this.$router.replace('/')
}
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

h1 {
font-weight: 100%;
height: 100%;
font-size: 50px;

}

.dv{
  position: absolute;
}

</style>