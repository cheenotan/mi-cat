<template>
    <div class="catList">
        <cat-list v-for="(item,index) of catData" :key="index" :item="item"></cat-list>
        <h1 v-show="catData == 0">空空如也~</h1>
    </div>


</template>

<script>
// import topHeader from '../topHeader.vue'
import { mapState } from 'vuex';
import catList from './cat-list.vue'

export default {
 
    components: {
        catList
    },
    computed:{
        ...mapState(['catData'])
    }
}

</script>

<style lang="less" scoped>

    .catList {
        padding-bottom: 1.2rem;
    }
</style>