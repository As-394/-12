<template>
 <div>
 <Linechart></Linechart>
 <Statistics></Statistics>
 <Radar></Radar>
 <Order></Order>
 <speed></speed>
 </div>
</template>

<script>
import Statistics from "../components/home/Statistics"
import Linechart from "../components/home/Linechart"
import Radar from "../components/home/Radar"
import Order from "../components/home/Order"
import speed from "../components//home/speed"
 export default {
   name: '',
   props: {
   },
   components: {
     Statistics,
     Linechart,
     Radar,
     Order,
     speed
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

</style>