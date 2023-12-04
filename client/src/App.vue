<template>
  <div>
    <MapData/>
    <hr>
    <ShowData/>    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ShowData from './components/ShowData.vue';
import MapData from './components/MapData.vue';

export default {
  name: 'App',
  components: {
    MapData,
    ShowData
}
}
</script>

<style>
</style>
