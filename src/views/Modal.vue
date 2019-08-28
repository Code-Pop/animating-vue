<template>
  <div>
    <h1>This is the modal page</h1>

    <button @click="toggleModal">Open</button>

    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <p>
          <button @click="toggleModal">Close</button>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
