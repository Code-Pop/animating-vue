<template>
  <div class="card-container">
    <div>
      <span
        :class="{ active: activeFilter === 'Beginner' }"
        @click="updateFilter('Beginner')"
        >Beginner</span
      >
      <span
        :class="{ active: activeFilter === 'Intermediate' }"
        v-on:click="updateFilter('Intermediate')"
        >Intermediate</span
      >
      <span
        :class="{ active: activeFilter === 'Advanced' }"
        @click="updateFilter('Advanced')"
        >Advanced</span
      >
    </div>

    <transition-group name="card" tag="div" appear>
      <div class="card" v-for="course in filteredCourses" :key="course.id">
        {{ course.title }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeFilter: 'Beginner',
      courses: [
        {
          id: 123456,
          title: 'Intro to Vue',
          level: 'Beginner'
        },
        {
          id: 147904,
          title: 'Real World Vue',
          level: 'Intermediate'
        },
        {
          id: 863915,
          title: 'Mastering Vuex',
          level: 'Intermediate'
        },
        {
          id: 182518,
          title: 'Next-Level Vue',
          level: 'Intermediate'
        },
        {
          id: 645297,
          title: 'Animating Vue',
          level: 'Beginner'
        },
        {
          id: 268477,
          title: 'Beautify with Vuetify',
          level: 'Beginner'
        },
        {
          id: 368408,
          title: 'Scaling with Nuxt.js',
          level: 'Advanced'
        },
        {
          id: 483907,
          title: 'Token-Based Authentication',
          level: 'Intermediate'
        },
        {
          id: 190348,
          title: 'Watch Us Build A Trello Clone',
          level: 'Intermediate'
        },
        {
          id: 667297,
          title: 'Advanced Components',
          level: 'Advanced'
        }
      ]
    }
  },
  methods: {
    updateFilter(filter) {
      this.activeFilter = filter
    }
  },
  computed: {
    filteredCourses() {
      return this.courses.filter(course => course.level === this.activeFilter)
    }
  }
}
</script>

<style lang="css">
.active {
  color: #42b983;
  text-decoration: underline;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  /* display: inline-block;
  height: 80px;
  margin: 15px;
  border: 0.5px solid #2c3e50;
  border-radius: 3%;
  box-shadow: 0.1px 1px; */
  width: 10rem;
  height: 5rem;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1em;
  margin-top: 1em;
  padding-top: 0.75em;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 1px #2c3e50;
  backface-visibility: hidden;
  transform-origin: 10% 50%;
}

span {
  margin-right: 1rem;
  cursor: pointer;
}
</style>
