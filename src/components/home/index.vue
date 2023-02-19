<template>
    <div>
        <item-list v-for="(item,index) of phoneData" :key="index" :item="item"></item-list>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import topHeader from '../topHeader.vue'
import itemList from './item-list.vue'
    export default {
        components :{
            topHeader,
            itemList
        },
        computed:{
            ...mapState(['phoneData','totalMount'])
        },
        methods:{
            ...mapMutations(['SET_DATA'])
        }

    }
</script>