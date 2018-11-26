<template>
    <div class="app">

        <div class="nav-view">
            <div class="nav-item" v-for="(item, index) in items" v-bind:key="index">
                <router-link class="nav-link" v-bind:to="{path:item.link}">{{item.name}}</router-link>
            </div>
        </div>

        <!-- router-view才是实体 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    name:"App",
    data () {
        return{
            items:[
                {link: '/', name:'Home'},
                {link: '/vfor', name:'Vfor'},
                {link: '/parent', name:'Parent'},
                {link: '/brother', name:'Brother'},
                {link: '/emit', name:'Emit'}
            ]
        }
    }
}    
</script>

<style lang="less">
@text:#333333;
@link:#42b983;
.app{
    color:@text;
    .nav-view{
        display: flex;
        background: @link;
    }
    .nav-item{
        &:last-of-type{
            border-right:0;
        }
        border-right:1px solid #fff;
        padding: 0 10px;
        .nav-link{
            color:#fff;
            text-decoration: none;
        }
    }
}
</style>