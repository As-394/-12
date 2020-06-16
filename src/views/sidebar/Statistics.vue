<template>
 <div>
 <div class="grass">
<!--统计条-->
 <div class="young">
 <div class="young1">今日发布</div>
 </div>

 <div class="orange">原创文章</div>

 <div class="purple">新留言</div>

 <i class="laugh" >新消息</i  >
 </div>

 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         arr:[
             {}
         ]
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

<style scoped>
.grass{
    width: 100%;
    height: 50px;
    background: red;
    display: flex;
    justify-content: space-between;
}
.young{
    width: 25%;
    background: rgb(124,202,191);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    
}
.young1{
    width: 100%;
    position: absolute;
    left: 228px;
}
.orange{
    width: 25%;
    background: rgb(232,138,135);
}
.purple{
    width: 25%;
    background: rgb(131,117,163);
}
.laugh{
    width: 25%;
    background: rgb(159,206,193);
}
</style>