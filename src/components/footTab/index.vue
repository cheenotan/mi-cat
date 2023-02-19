<template>
    <div class="foot-container">
        <div class="foot-tab">总价:￥{{ totalPrice }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['totalPrice','totalMount','catData'])
    },
    updated() {
        localStorage.setItem('totalMount', this.totalMount)
        localStorage.setItem('totalPrice', this.totalPrice)
        localStorage.setItem('catData', JSON.stringify(this.catData))
    }
}
</script>

<style lang="less" scoped>
.foot-container {
    position: fixed;
    bottom: 0;
    // position: relative;
    height: 1.2rem;
    width: 100%;
    background-color: orange;

    .foot-tab {
        position: absolute;
        right: .1rem;
        font-size: .5rem;
        line-height: 1.2rem;
        height: 1.2rem;
        // color: red;

    }
}
</style>