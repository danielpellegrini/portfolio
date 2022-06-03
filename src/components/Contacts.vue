<template>
    <div>
        <div id="expandContactsLayover" class="holoContainerLayover"></div>
        <div id="expandContactsContainer" class="holoContainer holoContacts">
            <div class="holo-top">
                <h2 class="text-center">Contacts</h2> 
            </div> 
            <main id="contacts">
              <h1>Have a question or want to work together?</h1>
              <h1>Let's get in touch!</h1>
              <div class="icons-container">
                <div class="icon-contact" @mouseover="isGithub = true" @mouseout="isGithub = false" :class="{zoom: isGithub}">
                  <a href="https://github.com/danielpellegrini" target="blank">
                    <span class="fab fa-github"></span>
                  </a>
                </div>
                <div class="icon-contact" @mouseover="isLinkedin = true" @mouseout="isLinkedin = false" :class="{zoom: isLinkedin}">
                  <a href="https://linkedin.com/in/daniel-pellegrini-38655571" target="blank">
                   <span class="fab fa-linkedin"></span>
                  </a>
                </div>
                <div class="icon-contact" @mouseover="isEmail = true" @mouseout="isEmail = false" :class="{zoom: isEmail}">
                  <a href="mailto:danielpellegrini87@gmail.com" target="blank">
                    <span class="far fa-envelope"></span>
                  </a>
                </div>
              </div>
            </main>        
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isGithub: false,
      isLinkedin: false,
      isEmail: false

    }
  }
}
</script>