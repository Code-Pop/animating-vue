<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="card"></div>
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      // starting styles
    },
    enter(el, done) {
      // style to transition to once entered
    }
  }
}
</script>

<style scoped>
.card {
  display: block;
  margin: 0 auto 0 auto;
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
}
</style>
