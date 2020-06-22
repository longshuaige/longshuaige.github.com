# vuex
## 目标 & 作用
* Vue.use(Vuex) 做了什么
    + Vuex暴露的install 方法，对beforeCreate钩子函数混入了一个函数，即 Vue.mixin({ beforeCreate: vuexInit })
    + vuexInit的作用：
        - 将创建Vue根实例的时候传入的store，关联到根实例的$store上
        - 将子实例的$store 和 父实例的$store关联上，即 this.$store = options.parent.$store
* 如何处理module
    + new moduleCollection时，构造函数会调用 this.register, 该函数会判断options是否有modules属性，即递归register，由此构成module树
    + module有_children、_rawModule、state 三个重要属性
    +  moduleCollection实例最终只是返回一个 {root:rootModule}

* 怎么关联响应式
    + new Vuex.store时，会执行 resetStoreVM 方法：
        - new Vue({date:{$$state: state}}) 的过程，使得state添加了一个__ob__实例，__ob__有dep.subs
    + install时，混入的beforeCreate函数，在 new Vue应用vm时，触发了， 所以应用vm有了$store属性
    + 在应用vm实例解析模板的过程，碰到$store.state、$store.getter时，将依赖watcher推入其收集器 __ob__.dep.subs中