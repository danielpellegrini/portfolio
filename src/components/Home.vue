<template>
  <div class="main-container">
    <Welcome/>

    <nav id="navbar" class="layover">      
      <b-nav align="center" >
        <b-nav-item @click="viewWelcome">Home</b-nav-item>
        <b-nav-item v-for="(link, index) in navlinks" :key="link" @click="goToIndex(index)" :class="(activeIndex(index))">
          {{link}}
        </b-nav-item>
      </b-nav>
    </nav>
    
    <carousel-3d id="carousel" class="d-none" ref="mycarousel" @after-slide-change="goToIndex"  :count="navlinks.length" :space="500" :width="1900" :height="2800">
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

    <footer id="footer">
      <h5>DANIEL PELLEGRINI
        <span>
          <span class="far fa-copyright"></span>
            2021
        </span>
      </h5>
    </footer> 

  </div>  
</template>

<script>
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import Welcome from './Welcome'
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  
  data () {
    return { 
      navlinks: [
        'About',
        'Projects',
        'Contacts',
      ],    
      linksIndex: 0,
      active: true, 
      isActive: false
    }
  },
  name: 'Home',
  components: {
    About,
    Projects,
    Contacts,
    Welcome,
    Carousel3d,
    Slide
  },
  methods: {
   goToIndex(i) {
      this.$refs.mycarousel.goSlide(i)
      this.linksIndex = i
    },
    activeIndex(index) {
      if (index !== this.linksIndex) {
        return ''
      }  else {
        return 'highlight'
      }
    },
    viewWelcome() {
        document.getElementById("carousel").className = "carousel-3d-container zero";
        document.getElementById("welcome-container-top").className = "slide-in-top";
        document.getElementById("welcome-container-bottom").className = "slide-in-bottom";
        document.getElementById("welcomeComponent").className = "view-welcome";
        document.getElementsByTagName("UL")[0].className = "d-none";
        setTimeout(() => this.viewMore(), 2000);
    },
    viewMore() {
      document.getElementById("more-container").className = "more-container";
      document.getElementById("welcome-container-top").className = " ";
      document.getElementById("welcome-container-bottom").className = " ";
    },
  
  },

}
</script>
