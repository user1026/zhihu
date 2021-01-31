<template>
    <div id="look">
       
        <div class="top">
            <van-nav-bar
            :title="list.title"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
          />
        </div>
        <div v-html="list.body"></div>
        <div v-for="item in long" :key="item.id" class="ping">
            <div class="meta">
                <img :src="item.avatar" class="avatar" alt="#"><span class="author">{{item.author}}</span>
            </div>
            <p>{{item.content}}</p>
        </div>
        <div v-for="item in short" :key="item.id" class="ping">
            <div class="meta">
                <img :src="item.avatar" class="avatar" alt="#"><span class="author">{{item.author}}</span>
            </div>
            <p v-if="item.reply_to">回复：{{item.reply_to.author}}</p>
            <p>{{item.content}}</p>
        </div>
        <div class="zhanwei"></div>
    </div>
</template>

<script>
    import {reqid,reqlong,reqshort} from '../../untils/http.js'
    import {mapActions} from 'vuex'
export default {
    name: 'look',
    data() {
        return {
            list:{},
            long:[],
            short:[],
        };
    },
    beforeMount() {
        this.init()
    },
    mounted() {
       
    },
    methods: {
...mapActions({
    home: 'home/home',
}),
        init(){
            reqid( this.$route.params.id).then(res=>{
            this.list=res.data;
            })
            reqlong(this.$route.params.id).then(res=>{
            this.long=res.data.comments;
            })
            reqshort(this.$route.params.id).then(res=>{
            this.short=res.data.comments;
            })
        },
        onClickLeft(){
            this.$router.go(-1);
        }
    },
};
</script>

<style lang="less" scoped>
    @import url('http://news-at.zhihu.com/css/news_qa.auto.css?v=4b3e3');
#look{
    width: 100%;
    position: relative;
}
.top{
    position: fixed;
    top: 0;
    width: 100%;
}
.zhanwei{
    width: 100%;
    height: 1rem;
}

.ping {
    width: 100%;
   
    p{
  font: normal 0.3rem/0.3rem '微软雅黑';
} 
}
</style>