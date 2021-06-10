<template>
    <div id="welcomeComponent">

        <div id="welcome-container-top" @click="hideWelcome" >
            <div class="welcome"> 

                <h1 class="text text-flicker-in-glow">
                    <v-scrollin id="scrollName" class="d-inline" :speed="25" :misses="3">Hi,</v-scrollin> 
                </h1>

                <h1 class="text text-flicker-in-glow">
                    <v-scrollin id="scrollName" class="d-inline" :speed="25" :misses="3">I am</v-scrollin> 
                    <span id="name" class="text-flicker-in-glow2">
                        <v-scrollin id="scrollName" class="d-inline" :speed="30" :misses="3">Daniel Pellegrini</v-scrollin>
                    </span> 
                </h1>

            </div>
        </div>

        <!-- LOADING -->
        <div id="loader">
            <div class="outer">
                <div class="inner"></div>
            </div>
            <h2>LOADING...</h2>
        </div>
        <!-- /LOADING -->

        <div id="welcome-container-bottom" @click="hideWelcome">
            <div class="welcome">
                
                    <h1 class="text text-flicker-in-glow">
                        <v-scrollin id="scrollName" class="d-inline" :speed="25" :misses="3">and I am a</v-scrollin>
                                        
                        <span id="job" class="text-flicker-in-glow2">
                            <v-scrollin id="scrollJob" class="d-inline" :speed="30" :misses="4">Full Stack Web Dev</v-scrollin>
                        </span>
                    </h1>
                
            </div> 

        </div>

    </div>
</template>


<script>
import VScrollin from 'vue-scrollin'
export default {
    components: {
        VScrollin
    },
    methods: {
       
        hideWelcome() {
            document.getElementById("welcome-container-top").className = "slide-out-top";
            document.getElementById("welcome-container-bottom").className = "slide-out-bottom";
            document.getElementById("carousel").className = "carousel-3d-container";              
            document.getElementById("welcomeComponent").className = "hideWelcome";
            document.getElementById("navbar").className = "d-block";
            document.getElementById("navbar").className = "layover";
            document.getElementsByTagName("UL")[0].className = "nav justify-content-center";

        }    
    }
}
</script>

