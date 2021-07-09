<template>
    <div>
        <div id="expandProjectsLayover" class="holoContainerLayover"></div>
        <div id="expandProjectsContainer" class="holoContainer">
            <div class="holo-top">
                <h2 class="text-center">Projects</h2>
            </div>
            <main>
              <div id="projects">
                <div class="row-container first-row">  

                  <!-- FIRST ROW -->
                  <div class="card column-3-with-offset column-3-with-offset">
                    <a href="https://danielpellegrini.github.io/js-html-css-boolzap/" target="blank"><img src="../assets/img/whatsappweb.jpg" class="card-img-top" alt="whatsapp image"></a>
                    <div class="card-body">
                      <div>
                        <h5 class="card-title">WhatsApp Web (clone)</h5>
                        <h6 class="card-text">Technologies used:</h6>
                        <p class="card-text"><span class="fab fa-html5"></span></p>
                        <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                        <p class="card-text"><span class="fab fa-js-square"> / <span class="fab fa-vuejs"></span></span></p>
                      </div>
                      <div>
                        <a href="https://danielpellegrini.github.io/js-html-css-boolzap/" target="blank" class="btn">View</a>
                      </div>
                    </div>
                  </div>

                  <div class="card column-3-with-offset">
                    <a href="https://danielpellegrini.github.io/vue-boolflix/" target="blank"><img src="../assets/img/netflix.jpg" class="card-img-top" alt="netflix image"></a>
                    <div class="card-body">
                    <div>
                      <h5 class="card-title">Netflix (clone)</h5>
                      <h6 class="card-text">Technologies used:</h6>
                      <p class="card-text"><span class="fab fa-html5"></span></p>
                      <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                      <p class="card-text"><span class="fab fa-js-square"> / <span class="fab fa-vuejs"></span></span></p>
                      <h6 class="card-text">AJAX call to TMDB</h6>
                    </div>
                      <div>
                        <a href="https://danielpellegrini.github.io/vue-boolflix/" target="blank" class="btn">View</a>
                      </div>
                    </div>
                  </div>

                  <div class="card column-3-with-offset">
                    <a href="https://danielpellegrini.github.io/html-css-spotifyweb/" target="blank"><img src="../assets/img/spotify.jpg" class="card-img-top" alt="spotify image"></a>
                    <div class="card-body">
                    <div>
                      <h5 class="card-title">Spotify Web (clone)</h5>
                      <h6 class="card-text">Technologies used:</h6>
                      <p class="card-text"><span class="fab fa-html5"></span></p>
                      <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                    </div>
                      <div>
                        <a href="https://danielpellegrini.github.io/html-css-spotifyweb/" target="blank" class="btn">View</a>
                      </div>
                    </div>
                  </div>

                  <!-- SECOND ROW -->
                  <div class="row-container second-row">
                    <div class="card column-3-with-offset">
                      <a href="https://fable-kindergarten.herokuapp.com/" target="blank"><img src="../assets/img/fable.jpg" class="card-img-top" alt="spotify image"></a>
                      <div class="card-body">
                        <div>
                          <h5 class="card-title">Fable Kindergarten</h5>
                          <h6 class="card-text">Technologies used:</h6>
                          <p class="card-text"><span class="fab fa-html5"></span></p>
                          <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                          <p class="card-text"><span class="fab fa-php"></span></p>
                          <p class="card-text"><span class="fab fa-js-square"></span> (Jquery)</p>
                        </div>
                        <div>
                          <a href="https://fable-kindergarten.herokuapp.com/" target="blank" class="btn">View</a>
                        </div>
                      </div>
                    </div>

                    <div class="card column-3-with-offset">
                      <a href="https://danielpellegrini.github.io/html-css-digitalocean/" target="blank"><img src="../assets/img/digitalocean.jpg" class="card-img-top" alt="spotify image"></a>
                      <div class="card-body">
                      <div>
                        <h5 class="card-title">Digital Ocean (clone)</h5>
                        <h6 class="card-text">Technologies used:</h6>
                        <p class="card-text"><span class="fab fa-html5"></span></p>
                        <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                      </div>
                        <div>
                          <a href="https://danielpellegrini.github.io/html-css-digitalocean/" target="blank" class="btn">View</a>
                        </div>
                      </div>
                    </div>
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
  // mounted() {
  //   console.log(this.$parent.$parent.animationSpeed);
  // },
  methods: {
     expandProjects() {
      document.getElementById("expandProjectsLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandProjectsContainer").className = "max-width holoContainer";
      document.getElementById("projects").className = "increase-projects";
      document.getElementById("compressProjects").className = "fas fa-compress-arrows-alt";
      document.getElementById("expandProjects").className = " ";
      document.getElementsByTagName("UL")[0].className = "hidden nav justify-content-center";
      this.$parent.$parent.animationSpeed = 1000000000;
    },
    compressProjects() {
      document.getElementById("expandProjectsLayover").className = "holoContainerLayover";
      document.getElementById("expandProjectsContainer").className = "holoContainer";
      document.getElementById("projects").className = " ";
      document.getElementById("expandProjects").className = "fas fa-expand-arrows-alt";
      document.getElementById("compressProjects").className = " ";
      document.getElementsByTagName("UL")[0].className = "visible nav justify-content-center";
      this.$parent.$parent.animationSpeed = 500;
    },
  }
}
</script>