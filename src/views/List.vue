<template>
  <div>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>
    <button @click="sortAlphabetical">Sort</button>

    <transition-group name="slide-fade" appear tag="ul">
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['Beau Thabeast', 'Cindy Rella', 'Alice Vunderlind']
    }
  },
  methods: {
    addContact() {
      const capitalized = this.newContact.replace(/(?:^|\s)\S/g, (a) => { return a.toUpperCase() })
      this.contacts.push(capitalized)
      this.newContact = ''
    },
    sortAlphabetical() {
      this.contacts.sort()
    }
  }
}
</script>


<style scoped>
.slide-fade-move {
  transition: transform 500ms ease-out;
}
</style>