<template>
  <div class="home">
    <div v-if="showChatAppDom === true" @click="_controls" ><span>微信小程序中</span></div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld id="lifc" msg="Welcome to Your Vue.js App"/>

    

    

  </div>
</template>
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
<script>




// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'home',
  data () {
    return{
      msg: 'lifc',
      showChatAppDom: false
    }
  },
  beforeCreate () {
    console.log(this.msg)
    console.log('beforeCreate')
  },
  created () {
    // this.time = setInterval(() => {
    //    console.log('计时')
    // }, 1000)
    const dom = document.getElementById('lifc')
    console.log('dom' + dom)
    console.log(this.msg)
    console.log('created')
  },
  beforeMount () {
    const dom = document.getElementById('lifc')
    console.log('dom' + dom)
    console.log('beforeMount')

    // 同步做法
    // var ua = navigator.userAgent.toLowerCase();
    // var isMiniProgram = ua.match(/miniProgram/i)=='miniprogram'? true : false;
    // console.warn('isMiniProgram',isMiniProgram)

    // document.writeln(isMiniProgram)
    // document.writeln(ua)
    // if(isMiniProgram){
    //   this.showChatAppDom = true;
    // }

    // 微信给的异步做法
    if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
      document.addEventListener('WeixinJSBridgeReady', this.ready, false)
    } else {
      this.ready()
    }

  },
  mounted () {
    const dom = document.getElementById('lifc')
    console.log('dom' + dom)
    console.log('mounted')
  },
  //  mounted : [
  //    function () {
  //       console.log('--------------')
  //    },
  //    function () {
  //        console.log('~~~~~~~~~~~~~~')
  //    }
  //  ],
  destroyed () {
    //  clearInterval(this.time)
  },
  methods:{
    ready() {
      //console.warn('123123123')
      
      if(window.__wxjs_environment === 'miniprogram') {
        this.showChatAppDom = true;
        document.writeln('123123123')
      }
    },
    _controls(){
      wx.miniProgram.navigateTo({
        url:'/pages/test/test'
      })
    }
    
  },
  components: {
    HelloWorld
  },
  

}
</script>
