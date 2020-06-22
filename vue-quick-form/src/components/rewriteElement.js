import Vue from 'vue'
import ElementUI from 'element-ui'
console.log(ElementUI)
let components = Object.keys(ElementUI).filter(item=>typeof ElementUI[item] === 'object')

let writes = ['Input']

import input from './elements/input'

for(let compName of components) {
    if(writes.includes(compName)) {
        Vue.component('Ele'+compName, ElementUI[compName])
        Vue.component("El" + compName, input)
    } else {
        Vue.component('El' + compName, ElementUI[compName])
    }
}
