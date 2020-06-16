<template>
 <div class="qwe">
   <el-card class="box-card">
  <ve-line :data="chartData" :colors='chartData.arr'></ve-line>
   </el-card>
 </div>
</template>

<script>
import axios from "axios" 
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      chartData:{
        columns:[],
        rows:[],
        arr:['#FE0000','#548111']

      }
     }
   },
   methods: {
    // 折线图
     getData(){
       axios.get("/api/homeChat").then(res=>{
       this.chartData.rows=res.data.data
       this.chartData.columns =Object.keys(res.data.data[0])
       console.log(res.data)
       }).catch(err=>{
         console.log(err)
       })
     }
   },
   mounted() {
    // 折线图
    this.getData()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.qwe{
  margin-top: 30px;
}


</style>