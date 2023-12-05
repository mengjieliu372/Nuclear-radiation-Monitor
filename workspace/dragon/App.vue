<template>
  <div>
    <MapData :date="date"></MapData>
    <SelectDate @SelectedDate="SetDate"></SelectDate>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
//import ShowData from './components/ShowData.vue';
import MapData from './components/MapData.vue';
import SelectDate from './components/SelectDate.vue';


export default {
  name: 'App',
  data(){
    return{
      date:{
        year:'0',
        month:'0',
        day:'0'
      }
    }
  },
  components: {
    MapData,
    SelectDate,
    //ShowData
  },
  methods:{
    SetDate(selected_date){
      if(selected_date)
      {
        this.date.year=selected_date.year;
        this.date.month=selected_date.month;
        this.date.day=selected_date.day;
      }
      else this.date='0';
    },
  }
}
</script>

<style>

</style>
