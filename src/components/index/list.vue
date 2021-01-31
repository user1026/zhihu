<template>
    <div id="list" key="listshow">
        <div id="top">
            <van-nav-bar :title="title" />
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" v-if="list[0]" indicator-color="white">
            <van-swipe-item v-for="item in list[0].top_stories" :key="item.id">
                <img id="vantimg" :src="item.image" alt="#">
                <p id="toptitle">{{item.title}}</p>
            </van-swipe-item>
        </van-swipe>
         <van-list v-model="loading" offset="100" :finished="finished" :immediate-check="false" finished-text="没有更多了"
            @load="onLoad" ref="showlist">
            <van-cell v-for="(item,index) in list" :key="index" ref="main">
                <slot name="main">
                     <van-button type="info">{{newdate(item.date)}}</van-button>
                    <div id="main" v-for="(img,index) in item.stories" :key="img.id"
                        @click="look(item.stories[index].id)">
                        <img :src="img.images" alt="#">
                        <p>{{img.title}}</p>
                    </div>
                </slot>
            </van-cell>
        </van-list> 
        <div class="zhanwei"></div>
    </div>
</template>

<script>
    import moment from 'moment';
    import {
        reqnow,
        reqbefore
    } from '../../untils/http.js'
    import {
        mapActions,
        mapGetters,
        mapMutations
    } from 'vuex'
    export default {
        name: 'list',

        data() {
            return {
                loading: false,
                finished: false,
                beforedate: [],
                title: '',
                listheight: 900,
                imgheight: 500,
                topimg:{},
                top_stories:null,
            };
        },
        computed: {
            ...mapGetters({
                list: 'home/getlist',
                getdate: 'home/getdate'
            }),
            newdate() {
                return (item) => {
                    return moment(item).format('YYYY年MM月DD日')
                }
            }
        },
        created() {
          
        },
        mounted() {
            this.init();
            window.addEventListener('scroll', this.handleScroll, true)
        },
        methods: {
            ...mapActions({
                homelist: 'home/home',
            }),
            //添加时间
            ...mapMutations({
                changelist:'home/changelist',
                changedate: 'home/changedate'
            }),
            //无限加载
            onLoad() {
                let date = this.getdate[this.getdate.length - 1]
                reqbefore(date).then(res => {
                    this.beforedate.push(res.data.date)
                    this.changedate(res.data.date);
                    this.changelist(res.data);
                    this.loading = false;
                })
            },
            init() {
                this.title = moment(this.getdate[0]).format('YYYY年MM月DD日');
            },
            handleScroll() {
               for(let i=0;i<this.list.length;i++){
                let top=this.$refs.main[i].getBoundingClientRect().top
                let height=this.$refs.main[i].scrollHeight;
                if((-1*height)/2<top&&top<200){
                   
                    this.title = moment(this.getdate[i]).format('YYYY年MM月DD日')
                }
               }
            },
            look(id) {
               
                this.$router.push({
                    path: `/look/${id}`
                })
            }
        },
        beforeDestroy() {
           window.removeEventListener('scroll',this.handleScroll,true)
        },

    };
</script>

<style lang="less" scoped>
    #top {
        width: 100%;
        height: 1rem;
        position: fixed;
        top: 0;
        z-index: 999;
    }

    #list {
        width: 100%;
        position: relative;
        top: 1rem;
    }

    #main {
        display: flex;
        justify-content: flex-start;
        font: normal 0.4rem/1rem "微软雅黑";
    }

    #main2 img {
        width: 100%;
        height: auto;
    }

    .zhanwei {
        width: 100%;
        height: 1rem;
    }

    .my-swipe {
        width: 100%;
        position: relative;
    }

    #vantimg {
        width: 100%;
        height: auto;
    }

    #toptitle {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.4rem;
        font: normal 0.3rem/0.4rem '微软雅黑';
        color: beige;
        background-color: #999999;
    }

    .van-button {
        width: 100%;
        border-radius: 20px;
        font: normal 0.4rem/0.4rem '微软雅黑';
    }
</style>