<template>
    <div>
        <top-header :backShow="true">购物车</top-header>
        <cat></cat>
        <foot-tab></foot-tab>
    </div>
</template>

<script>
    import cat from '@/components/cat/cat.vue'
    import topHeader from '@/components/topHeader.vue'
    import footTab from '@/components/footTab'
    export default {
        components :{
            cat,
            topHeader,
            footTab
        },
        mounted() {
            this.$store.dispatch('setData')
        }
    }
</script>