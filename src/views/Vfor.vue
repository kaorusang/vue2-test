<template>
  <div class="about">

    <div v-if="flag === 1"  @click="hanlerClick"><span v-html="msg" ></span>aabb</div>
    <div v-else-if="flag === 2"><span v-html="msg" ></span>123</div>
    <div v-else ><span v-html="msg" ></span>456</div>

    <ul>
      <li v-for="(item, index) in shoplist" :key="item.shopId">
        <p>{{item.shopId}}</p>
        <p>{{item.shopName}}</p>
        <p>{{index}}</p>
      </li>
    </ul>

    <div v-for="(value, key, index) in object" :key="index">
        {{ index }}. {{ key }}: {{ value }}
    </div>

    
  </div>
</template>

<script>
export default {
  data (){
    return {
      // v-if
      msg: 'hi',
      show: true,
      flag: 1,

      // v-for
      shoplist:[
          {shopId:1,shopName:'shop1'},
          {shopId:2,shopName:'shop2'},
          {shopId:3,shopName:'shop3'},
          {shopId:4,shopName:'shop4'},
          {shopId:5,shopName:'shop5'},

      ],
      object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
      }
        
    }
  },
  methods:{
    hanlerClick(){
      this.msg = 'HI'
      //this.show = !this.show
      this.flag = 2
    }
  }
}


</script>

<style lang="scss">
$color1:pink;
.about{
  color: $color1;
}
</style>
