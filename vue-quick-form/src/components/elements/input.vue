<template>
    <ele-input ref="ipt" v-bind="$attrs" v-on="$listeners" @input="changeVal" v-model="myval"></ele-input>
</template>
<script>
    export default {
        model:{
            value: 'v',
            event: 'change1'
        },
        data(){
            return {
                myval: ''
            }
        },
        created(){

        },
        mounted(){
            console.log(this.$refs.ipt)
        },
        methods:{
            changeVal(v){
                console.log(v)
                this.$emit("change1", btoa(v))
            }
        }
    }
</script>