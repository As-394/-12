<!--全局-->
<template>
 <div>
<el-container style="height:100%;">
  <el-header style="height:50px;">
  <top></top>
  </el-header>

  <el-container>

    <el-aside style="width:202px" >
    <sidebar></sidebar>
    </el-aside>

    <el-main class="ggd"><router-view></router-view></el-main>


  </el-container>
  
</el-container>
 </div>
</template>

<script>
import top from '../../components/home/top';
import sidebar from '../../components/home/sidebar'


 export default {
   name: '',
   props: {
   },
   components: {
     top,
     sidebar,
   },
   data () {
     return {

     }
   },
   methods: {

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
.ggd{
height:100%;
}
</style>