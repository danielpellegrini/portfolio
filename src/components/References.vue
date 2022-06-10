<template>
  <div>
    <div id="expandReferencesLayover" class="holoContainerLayover"></div>
    <div id="expandReferencesContainer" class="holoContainer">
      <div class="holo-top">
        <h2 class="text-center">References</h2>
      </div>
      <main>
        <div id="projects">
          <div class="row-container first-row">

            <!-- FIRST ROW -->
            <div class="card column-3-with-offset column-3-with-offset">
              <a href="https://www.keramik-liebe.de/" target="blank"><img src="../assets/img/KL.webp"
                  class="card-img-top" alt="whatsapp web clone image"></a>
              <div class="card-body">
                <div>
                  <h5 class="card-title">Keramik Liebe</h5>
                  <h6 class="card-text">
                    <a href="https://www.keramik-liebe.de/">https://www.keramik-liebe.de/</a>
                  </h6>
                  <h6 class="card-text">Technologies used:</h6>
                  <p class="card-text"><span class="fab fa-shopware"></span> <small>Shopware 6 CMS</small></p>
                  <p class="card-text"><span class="fab fa-css3-alt"></span></p>
                  <p class="card-text"><span class="fab fa-js-square"></span></p>
                </div>
                <div>
                  <a href="https://www.keramik-liebe.de/" target="blank" class="btn">View</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <i id="expandReferences" @click="expandReferences()" class="fas fa-expand-arrows-alt"></i>
      <i id="compressReferences" @click="compressReferences()" class=""></i>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$parent.$parent);
  },
  methods: {
     expandReferences() {
      document.getElementById("expandReferencesLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandReferencesContainer").className = "max-width holoContainer";
      document.getElementById("projects").className = "increase-projects";
      document.getElementById("compressReferences").className = "fas fa-compress-arrows-alt";
      document.getElementById("expandReferences").className = " ";
      document.getElementsByTagName("UL")[0].className = "hidden nav justify-content-center";
      this.$parent.$parent.animationSpeed = 1000000000;
    },
    compressReferences() {
      document.getElementById("expandReferencesLayover").className = "holoContainerLayover";
      document.getElementById("expandReferencesContainer").className = "holoContainer";
      document.getElementById("projects").className = " ";
      document.getElementById("expandReferences").className = "fas fa-expand-arrows-alt";
      document.getElementById("compressReferences").className = " ";
      document.getElementsByTagName("UL")[0].className = "visible nav justify-content-center";
      this.$parent.$parent.animationSpeed = 500;
    },
  }
}
</script>