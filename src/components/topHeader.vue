<template>
    <div class="top-header">
        <router-link to="./" class="go-back" v-if="backShow">返回</router-link>
        <h1 class="center"><slot></slot></h1>
        <router-link class="go-cat" to="/cat" v-if="catShow">购物车({{totalMount}})</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';

 export default {
    name:'topHeader',
    computed: {
        ...mapState(['totalMount','totalPrice','catData'])
    },
    updated() {
        localStorage.setItem('totalMount',this.totalMount)
        localStorage.setItem('totalPrice',this.totalPrice)
        localStorage.setItem('catData',JSON.stringify(this.catData))
    },
    props:{
        backShow: Boolean,
        catShow: Boolean
    }
 }
</script>

<style lang="less" scoped>
    .top-header {
        position: relative;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        width: 100%;
        background-color: orange;
        font-size: .5rem;
        .center {
            margin: 0 auto;

        }
        .go-back {
            position: absolute;
            left: .1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #000;
        }
        .go-cat {
            position: absolute;
            right:.1rem;
            top: 50%;
            transform: translateY(-50%);
            color: #000;
        }
    } 

</style>