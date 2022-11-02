<template>
  <div>
    <h3>当前的和:{{ $store.state.sum }}</h3>
    <h3>当前的和放大10倍:{{ $store.getters.bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数+</button>
    <button @click="incrementWait">等等再加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increment() {
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      this.$store.commit('SUB', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }
  }
}
</script>
<style scoped lang="less">
button {
  margin-left: 10px;
}
</style>
