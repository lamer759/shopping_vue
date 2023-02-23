<template>
 <div>
  <HeaderVue></HeaderVue>
  <router-view></router-view>
  <FooterVue v-show="$route.meta.show"></FooterVue>
 </div>
</template>

<script>

import HeaderVue from './components/Header/HeaderVue.vue'
import FooterVue from './components/Footer/FooterVue.vue'
export default {
  name: 'App',
  components:{
    HeaderVue ,FooterVue
  },
  mounted(){
    this.$store.dispatch("categoryList");
  }
  
}
</script> 

<style>

</style>
