<template>
  <div class="main-container">

    <div class="layover">      
      <b-nav align="center" >
        <b-nav-item class="glitch">Home</b-nav-item>
          <!-- AGGIUNGERE CLASSE GLITCH DINAMICA -->
        <b-nav-item v-for="(link, index) in navlinks" :key="link" @click="goToIndex(index)" :class="(activeIndex(index))">
          {{link}}
        </b-nav-item>
      </b-nav>
    </div> 

    <carousel-3d ref="mycarousel" @before-slide-change="goToIndex" :width="500" :height="800">
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
    Contacts
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
    }
  }
}
</script>
