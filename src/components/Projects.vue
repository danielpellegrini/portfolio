<template>
    <div>
        <div id="expandProjectsLayover" class="holoContainerLayover"></div>
        <div id="expandProjectsContainer" class="holoContainer">
            <div class="holo-top">
                <h2 class="text-center">Projects</h2>
            </div>
            <main>
              <div id="projects" >
                <div class="card">
                  <img src="../assets/img/whatsappweb.jpg" class="card-img-top" alt="whatsapp image">
                  <div class="card-body">
                    <h5 class="card-title">WhatsApp Web (clone)</h5>
                    <p class="card-text">Technologies used:</p>
                    <p class="card-text">- HTML5</p>
                    <p class="card-text">- CSS</p>
                    <p class="card-text">- Javascript (VueJs).</p>
                    <a href="https://danielpellegrini.github.io/js-html-css-boolzap/" class="btn btn-primary">View</a>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/netflix.jpg" class="card-img-top" alt="netflix image">
                  <div class="card-body">
                    <h5 class="card-title">Netflix (clone)</h5>
                    <p class="card-text">Technologies used:</p>
                    <p class="card-text">- HTML5</p>
                    <p class="card-text">- CSS</p>
                    <p class="card-text">- Javascript (VueJs)</p>
                    <p class="card-text">- API call to TMDB</p>
                    <a href="https://danielpellegrini.github.io/vue-boolflix/" class="btn btn-primary">View</a>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/spotify.jpg" class="card-img-top" alt="spotify image">
                  <div class="card-body">
                    <h5 class="card-title">Spotify Web (clone)</h5>
                    <p class="card-text">Technologies used:</p>
                    <p class="card-text">- HTML5</p>
                    <p class="card-text">- CSS</p>
                    <a href="https://danielpellegrini.github.io/html-css-spotifyweb/" class="btn btn-primary">View</a>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/fable.jpg" class="card-img-top" alt="spotify image">
                  <div class="card-body">
                    <h5 class="card-title">Fable Kindergarten</h5>
                    <p class="card-text">Technologies used:</p>
                      <p class="card-text">- PHP</p>
                      <p class="card-text">- HTML5</p>
                    <p class="card-text">- CSS</p>
                    <a href="https://fable-kindergarten.herokuapp.com/" class="btn btn-primary">View</a>
                  </div>
                </div>
                <div class="card">
                  <img src="../assets/img/digitalocean.jpg" class="card-img-top" alt="spotify image">
                  <div class="card-body">
                    <h5 class="card-title">Digital Ocean (clone)</h5>
                    <p class="card-text">Technologies used:</p>
                    <p class="card-text">- HTML5</p>
                    <p class="card-text">- CSS</p>
                    <a href="https://danielpellegrini.github.io/html-css-digitalocean/" class="btn btn-primary">View</a>
                  </div>
                </div>                
              </div>                              
            </main>

            <i id="expandProjects" @click="expandProjects()" class="fas fa-expand-arrows-alt"></i>
            <i id="compressProjects" @click="compressProjects()" class=""></i>
        </div>
    </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$parent.$parent.animationSpeed);
  },
  methods: {
     expandProjects() {
      document.getElementById("expandProjectsLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandProjectsContainer").className = "max-width holoContainer";
      document.getElementById("projects").className = "increase-projects";
      document.getElementById("compressProjects").className = "fas fa-compress-arrows-alt";
      document.getElementById("expandProjects").className = " ";
      document.getElementsByTagName("UL")[0].className = "hidden nav justify-content-center";
      this.$parent.$parent.animationSpeed = 1000000000;
      console.log(this.$parent.$parent.animationSpeed);
    },
    compressProjects() {
      document.getElementById("expandProjectsLayover").className = "holoContainerLayover";
      document.getElementById("expandProjectsContainer").className = "holoContainer";
      document.getElementById("projects").className = " ";
      document.getElementById("expandProjects").className = "fas fa-expand-arrows-alt";
      document.getElementById("compressProjects").className = " ";
      document.getElementsByTagName("UL")[0].className = "visible nav justify-content-center";
      this.$parent.$parent.animationSpeed = 500;
      console.log(this.$parent.$parent.animationSpeed);
    },
  }
}
</script>