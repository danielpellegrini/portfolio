<template>
  <div class="main-container">
    <div class="layover">
      <b-nav align="center">
          <b-nav-item class="glitch" data-text="Home">Home</b-nav-item>
          <b-nav-item @click="goToIndex(0)" class="glitch-2 current" data-text="About">About</b-nav-item>
          <b-nav-item @click="goToIndex(1)" class="glitch-3 current" data-text="Projects">Projects</b-nav-item>
          <b-nav-item @click="goToIndex(2)" class="glitch-4" data-text="Contacts">Contacts</b-nav-item>
      </b-nav> 
    </div> 

    <carousel-3d ref="mycarousel" :width="500" :height="700">
      <slide :index="0">
        <About/>
      </slide>
      <slide :index="1">
        <Projects/>
      </slide>
      <slide :index="2">
        <Contacts/>
      </slide>
    </carousel-3d>

  </div>
  
</template>

<script>
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'

export default {
  name: 'Home',
  components: {
    About,
    Projects,
    Contacts
  },
  methods: {
    goToIndex(index) {
      this.$refs.mycarousel.goSlide(index)
    }
  }
}
</script>
