<template>
  <div>
    <h1>{{ this.msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created () {
    axios.get('http://localhost:3000/hello')
      .then(response => {
        this.msg = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
