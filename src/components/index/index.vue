<template>
    <div id="index" key="index">
        <v-list></v-list>
    </div>
</template>

<script>
    import {
        reqnow
    } from '../../untils/http.js'
    import list from './list.vue';
    import {
        mapActions,
        mapGetters,
        mapMutations,
    } from 'vuex'
    export default {
        name: 'index',
        components: {
            vList: list,
        },
        computed: {
            ...mapGetters({
                list: 'home/getlist'
            }),
        },
        data() {
            return {

            }
        },
        mounted() {
            if(this.list.length==0){
            this.homelist();
           }
        },
        methods: {
            ...mapActions({
                homelist: 'home/home',
            }),
           
        }
    }
</script>
<style lang="less" scoped>
    #index {
        width: 100%;
        height: 100%;
    }
</style>