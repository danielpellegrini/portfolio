<template>
    <div id="welcomeComponent">

        <div id="welcome-container-top" @click="slideUp" >
            <div class="welcome">                
                <h1 class="text text-flicker-in-glow">Hi,</h1>
                <h1 class="text text-flicker-in-glow ">I am <span class="text-flicker-in-glow2">Daniel Pellegrini</span> </h1>
                <h1 class="text text-flicker-in-glow">and I am a <span class="text-flicker-in-glow2">Full Stack Web Dev</span></h1> 

            </div>
        </div>

        <div id="loader">
            <div class="outer">
                <div class="inner"></div>
            </div>
            <h2>LOADING...</h2>
        </div>

        <div id="welcome-container-bottom" @click="slideUp">

        </div>

    </div>
</template>


<script>
export default {
    methods: {
       
        slideUp() {
            document.getElementById("welcome-container-top").className = "slide-out-top";
            document.getElementById("welcome-container-bottom").className = "slide-out-bottom";
            document.getElementById("carousel").className = "carousel-3d-container";              
            document.getElementById("welcomeComponent").className = "hideWelcome";
        }
    
}
}
</script>

