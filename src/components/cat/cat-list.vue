<template>
    <div class="list-container">
        <div class="left">
            <img :src="item.img" alt="">
        </div>
        <div class="right">
            <h1>{{item.name}}</h1>
            <p class="right-slogan">{{item.slogan}}</p>
            <div class="price">
                <p class="price-left">￥{{item.totalPrice}}</p>
                <div class="mountChange">
                    <button @click="changeMount(item,'MINUS')">-</button>
                    <span class="mount">{{item.totalMount}}</span>
                    <button @click="changeMount(item,'PLUS')">+</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
        name:'itemList',
        props:{
            item:Object
        },
        mounted() {
            // console.log(this.item);
        },
        methods:{
            changeMount(data,type) {
                this.$store.dispatch('addMount',{
                    price:data.price,
                    type:type
                })
                this.$store.dispatch('setCatData',{
                    id:data.id,
                    img:data.img,
                    name:data.name,
                    slogan:data.slogan,
                    price:data.price,
                    type:type
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    .list-container {
        display: flex;
        border-bottom: .5px solid #999;
    }
    .left {
        height: 3.6rem;
        width: 3.6rem;
        img {
            height: 100%;
            width: 100%;
        }
    }

    .right {
        width: 60%;
        h1{
            font-size: .5rem;
            padding-top: .4rem;
        }
        .right-slogan {
            font-size: .3rem;
            width: 100%;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-top: .1rem;
            padding-bottom: .8rem;
        }
        .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price-left {
                color: red;
                font-size: .4rem;
            }
            .mountChange {
                display: flex;
                height: .6rem;
                // font-size: .1rem;
                text-align: center;
                line-height: .25rem;
                .mount {
                //     font-size: .5rem;
                //     height: .6rem;
                // font-size: .1rem;
                // text-align: center;
                // line-height: .25rem;
                font-size: .4rem;
                padding:.2rem
                }
            }   
        }
    }
</style>