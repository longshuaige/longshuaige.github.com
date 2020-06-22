<template>
  <div class="list-wrap">
	<span>list</span>
  <el-form :model="formData" :rules="rules">
    <el-form-item prop="password">
      <el-input v-model="formData.password" type="password"></el-input>
      <span>加密后： {{formData.password}}</span>
    </el-form-item>
    <el-button @click="saveFormData()">确定</el-button>
  </el-form>
  <div>{{data.name}}</div>
  </div>
</template>

<script>
import CurdApi from './../api/curdApi'
import listFunc from './list'
import getModuleConfig from './../config/module'
let baseMixin = [listFunc()] 

export default {
  name: 'ListPage',
  mixins: baseMixin,
  props: {
   
  },
  beforeCreate(){
    this.config = getModuleConfig(this.$route.name)
    this.curdApi = new CurdApi(this.config.name)
  },
  data(){
    return {
        formData:{
          password: ''
        },
        rules:{
          password: [{required:true}]
        },
        data:{
            name:'1234'
        },
        parentData:{
            name: 'abcd'
        }
    }
  },
  created(){
  },
  methods:{
    saveFormData(){
      console.log(this.formData)
    }
  }
}
</script>

<style scoped>

</style>
