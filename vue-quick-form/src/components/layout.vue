<template>
  <div class="root-wrap">
      <div class="header"></div>
      <div class="center">
            <div class="left-aside"></div>
            <div class="center-content">
                <router-view />
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  props: {
   
  },
  data(){
      return {
          data:{
              name:'1234'
          },
          parentData:{
              name: 'abcd'
          }
      }
  }
}
</script>

<style scoped>

</style>
