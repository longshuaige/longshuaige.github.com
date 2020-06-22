<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <layout>
      <!-- <template slot-scope="scope">{{scope.data1.name}}</template> -->
    </layout>
  </div>
</template>

<script>
import layout from './layout';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    layout
  }
}
</script>

<style scoped>

</style>
