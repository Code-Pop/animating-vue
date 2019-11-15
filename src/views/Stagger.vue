<template>
  <div id="container">
    <div v-for="card in cards" :key="card.id" class="card"></div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  data() {
    return {
      cards: [
        { id: 1298 },
        { id: 8748 },
        { id: 4919 },
        { id: 5527 },
        { id: 9428 },
        { id: 7103 }
      ]
    }
  },
  mounted() {
    gsap.from('.card', {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        each: 0.1,
        from: 'center'
      }
    })
  }
}
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  height: 6.5em;
  width: 6.5em;
  border-radius: 1%;
  background-color: #16c0b0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 1em;
  margin-top: 0.5em;
  margin-right: 0.5em;
}
</style>
