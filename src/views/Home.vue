<template>
    <div>
        <top-header :catShow="true">小米商城</top-header>
        <home></home>
    </div>
</template>

<script>
import home from '@/components/home/index.vue'
import topHeader from '@/components/topHeader.vue'
    export default {
        components:{
            home ,
            topHeader
        },
        mounted() {
            this.$store.dispatch('setData')
        }
    }
</script>