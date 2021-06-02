<template>
  <div class="main-container">
    <div class="layover">
      <Navigation/>
    </div> 

    <carousel-3d :width="500" :height="700">
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
import Navigation from './Navigation'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: 'Home',
  components: {
    Navigation,
    About,
    Projects,
    Contacts,
    Carousel3d,
    Slide
  },
  props: {

  }
}
</script>
