<template>
    <div class="select_">
      <select v-model="date.year">
        <option v-for="year in options.years" :key="year.value" >{{ year.label }}</option>
      </select>
      <span>年</span>
      <select v-model="date.month">
        <option v-for="month in options.months" :key="month.value" >{{ month.label }}</option>
      </select>
      <span>月</span>
      <select v-model="date.day">
        <option v-for="day in options.days" :key="day.value" >{{ day.label }}</option>
      </select>
      <span>日</span>
      <button @click="sendToMap()">确认</button>
    </div>
    
</template>

<script>

export default{
    data(){
      return{
        date:{
          year:0,
          month:0,
          day:0
        },
        options:{
          years:[
            {value:2023,label:2023}
          ],
          months:[
            {value:12,label:12},
            {value:11,label:11},
            {value:10,label:10},
          ],
          days:[
            {value:31,label:31},
            {value:30,label:30},
            {value:29,label:29},
            {value:28,label:28},
            {value:27,label:27},
            {value:26,label:26},
            {value:25,label:25},
            {value:24,label:24},
            {value:23,label:23},
            {value:22,label:22},
            {value:21,label:21},
            {value:20,label:20}
          ]
          
        }
      }
    },
    methods:{
      sendToMap(){
        //console.log(this.date.year)
        this.$emit('SelectedDate',this.date)
      }
    }
}

</script>

<style>
.select_{
  border: 1px solid red;
  padding-left: 70%;
}
</style>