<template>
  <div class="main-container">
    <Welcome/>

    <nav class="layover">      
      <b-nav align="center" >
        <b-nav-item @click="goHome">Home</b-nav-item>
        <b-nav-item v-for="(link, index) in navlinks" :key="link" @click="goToIndex(index)" :class="(activeIndex(index))">
          {{link}}
        </b-nav-item>
      </b-nav>
    </nav> 

    <carousel-3d id="carousel" class="d-none" ref="mycarousel" @before-slide-change="goToIndex" :width="500" :height="800">
      <slide :index="0" >
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
import Welcome from './Welcome'

export default {
  data () {
    return { 
      navlinks: [
        'About',
        'Projects',
        'Contacts'
      ],    
      linksIndex: 0,
      active: true   
    }
  },
  name: 'Home',
  components: {
    About,
    Projects,
    Contacts,
    Welcome
  },
  methods: {
    goToIndex(index) {
      this.$refs.mycarousel.goSlide(index)
      this.linksIndex = index
    },
    activeIndex(index) {
      if (index !== this.linksIndex) {
        return ''
      }  else {
        return 'highlight'
      }
    },
    goHome() {
      document.getElementById("welcomeComponent").className = "viewWelcome";
    }
  }
}
</script>
