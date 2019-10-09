<template>
  <div>
    <button @click="isOpen = !isOpen">
      My Profile
    </button>
    <div v-if="isOpen" class="drawer">
      <img src="../assets/avatar.png" alt="avatar" />
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>
img {
  height: 2.5em;
  width: 2.5em;
  border-radius: 50%;
}

.drawer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12em;
  height: 20em;
  border-radius: 1%;
  background-color: #e0e0e0;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  padding-top: 0.7em;
}
.drawer div {
  height: 3.5em;
  width: 95%;
  margin-top: 0.6em;
  background-color: #f0f0f0;
  border: 0.02em solid #ababab;
  border-radius: 1%;
}
</style>
