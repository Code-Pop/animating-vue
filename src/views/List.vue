<template>
  <div>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>
    <button @click="sortAlphabetical">Sort</button>

    <transition-group name="slide-fade" appear tag="ul">
      <li v-for="(contact, index) in contacts" :key="index">
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
      this.contacts.push(this.newContact)
      this.newContact = ''
    },
    sortAlphabetical() {
      this.contacts.sort()
    }
  }
}
</script>
