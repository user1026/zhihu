<template>
  <div id="app">
    <vfooter></vfooter>
    <router-view></router-view>
  </div>
</template>
<script>
  import foot from './components/foot.vue'
export default {
  name: 'App',
  components: { vfooter:foot },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>
<style lang="less">
#app{
  width: 100%;
  position: relative;
}
</style>
