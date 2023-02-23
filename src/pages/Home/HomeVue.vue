<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <RecommendVue></RecommendVue>
    <FloorVue></FloorVue>
  </div>
</template>

<script>
import ListContainer from './ListContainer/ListContainer.vue'
import RecommendVue from './Recommend/RecommendVue.vue'
import FloorVue from './Floor/FloorVue.vue'
export default {
 name:'HomeVue',
 components:{ ListContainer ,RecommendVue,FloorVue},
//  mounted() {
//   this.$store.dispatch('getUserInfo')
//  },
}
</script>

<style>

</style>