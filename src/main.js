import Vue from "vue";
import App from "./App.vue";
import router from './router'

new Vue({
    router,
    render:h=>h(App)
}).$mount("#app")


var data = {a:1}

// 直接创建一个实例
var vm = new Vue({
    data: data
})
console.log(vm.a) // => 1
console.log(vm.$data === data) // => true

// Vue.extend() 中 data 必须是函数
var Component = Vue.extend({
    data: function () {
      return { a: 2 }
    }
})

console.log(Component)