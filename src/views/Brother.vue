<template>
    <div class="">
        <h1>同级组件传递</h1>
        <brother-view1 ></brother-view1>
        <brother-view2 ></brother-view2>
    </div>
</template>

<script>
import BrotherView1 from '../components/Brother1.vue'
import BrotherView2 from '../components/Brother2.vue'
export default {
    name:'brother',
    components:{
        BrotherView1,
        BrotherView2
    },
    data () {
        return {
            name: 'sakamoto',
            childName: ''
        }
    },
    methods: {
        
    }
    
}
</script>

