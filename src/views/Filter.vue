<template>
  <div class="card-container">
    <div class="card-level-filter">
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

    <div class="card-level-list">
    <transition-group name="card" tag="div" appear>
      <div class="card" v-for="(course, index) in filteredCourses" :key="course.id" :style="{'--i': index}">
        {{ course.title }}
      </div>
    </transition-group>
    </div>
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

.card-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.card {
  width: 10rem;
  height: 5rem;
  display: inline-flex;
  margin: 1rem;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 0 0 1px #2c3e50;
  backface-visibility: hidden;
  transform-origin: 50%;
}

.card-level-filter span {
  margin-right: 1rem;
  cursor: pointer;
}



.card-move {
  transition: opacity .3s linear, transform .3s ease-in-out;
}

 .card-leave-to {
  transition: opacity .3s linear, transform .3s cubic-bezier(.5,0,.7,.4);
}

 .card-enter-active { 
  transition: opacity .3s linear .3s, transform .3s cubic-bezier(.2,.5,.1,1) .3s;
  transition-delay: calc(.3s + .1s * var(--i) );
}

 .card-enter, 
 .card-leave-to {
  opacity: 0;
  transform: scale(.6);
}
</style>
