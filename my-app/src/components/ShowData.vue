<template>
    <div>
        <p>Test The Data Returned</p>
        <div v-for="(item,index) in this.data" v-bind:key="index">
            <p>{{ item.station }}</p>
            <p>{{ item.value }}</p>
            <p>{{ item.time }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ShowData',
    data() {
        return {
            data: {}
        }
    },
    created() {
        axios.get('http://localhost:3000/returndata-test')
            .then(response => {
                //console.log(response.data);
                this.data = response.data;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

<style lang="scss" scoped></style>