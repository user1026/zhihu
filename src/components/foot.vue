<template>
    <div id="foot">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home-o"><router-link to="/index">首页</router-link></van-tabbar-item>
            <van-tabbar-item icon="setting-o"><router-link to="/me">我的</router-link></van-tabbar-item>
          </van-tabbar>
    </div>
    
</template>

<script>
export default {
    name: 'foot',
    components: {  },
   
    data() {
        return {
            active:0
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
};
</script>

<style lang="less" scoped>
#foot{
    height: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 999;
}
</style>