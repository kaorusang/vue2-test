<template>
    <div class="">
        <child-view :parentParams="name" v-on:setChildParamsHandler="getChildParams" ></child-view>
        <div>childName : {{childName}} </div>
    </div>
</template>

<script>
import ChildView from '../components/Child.vue'
export default {
    name:'parent',
    components:{
        ChildView
    },
    data () {
        return {
            name: 'sakamoto',
            childName: ''
        }
    },
    methods: {
        getChildParams: function(childParams) {
            // console.log(childParams)
            this.childName = childParams 
        }
    }
    
}
</script>

