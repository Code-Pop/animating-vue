<template>
  <div>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>

    <ul>
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </ul>
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
    }
  }
}
</script>
