<template>
  <div class="prop-demo">
    <h1>父传子：{{parentParams}}</h1>
    <button @click="childClick">子传父</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      childName:'maaya'
    }
  },
  props: ['parentParams'],
  methods: {
    childClick () {
      // console.log('123123')
      this.$emit('setChildParamsHandler', this.childName)
    }
  }
}
</script>