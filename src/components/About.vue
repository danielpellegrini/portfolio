<template> 
    <div>
        <div  id="expandAboutLayover" class="holoContainerLayover"></div>
        <div id="expandAboutContainer" class="holoContainer">
            <div class="holo-top">
                <h2 class="text-center">About</h2>
            </div>

            <main id="about">
              <div class="label-wrap">
              </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odit accusantium id nisi deserunt ex porro itaque. Suscipit eos doloremque minima, repudiandae dolorum autem nobis, modi enim ex, maxime cumque!</p>                
            </main>
            
              <i id="expandAbout" @click="expandAbout()" class="fas fa-expand-arrows-alt"></i>
              <i id="compressAbout" @click="compressAbout()" class=""></i> 
        </div>
    </div>
</template>

<script>
export default {
  methods: {
     expandAbout() {
      document.getElementById("expandAboutLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandAboutContainer").className = "max-width holoContainer";
      document.getElementById("compressAbout").className = "fas fa-compress-arrows-alt";
      document.getElementById("expandAbout").className = " ";
    },
    compressAbout() {
      document.getElementById("expandAboutLayover").className = "holoContainerLayover";
      document.getElementById("expandAboutContainer").className = "holoContainer";
      document.getElementById("expandAbout").className = "fas fa-expand-arrows-alt";
      document.getElementById("compressAbout").className = " ";
    }
  },
}
</script>
