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
                <p id="paragraph">
                </p>                
            </main>
            
              <i id="expandAbout" @click="expandAbout()" class="fas fa-expand-arrows-alt"></i>
              <i id="compressAbout" @click="compressAbout()" class=""></i> 
        </div>
    </div>
</template>

<script>
export default {
  mounted() {

    // const par = document.getElementById('paragraph').innerText
    const par = 'My name is Daniel Pellegrini*In 2020, after 16 years of totally different fields jobs, I decided to change my career* I wanted to learn about what I was really interested in and what I enjoyed doing in my free time and so I began putting serious effort into creating websites* In October 2020, I quit my job and I attended a Full Stack Web Developer course in Boolean Careers*We started with <span class="fab fa-html5"></span> and <span class="fab fa-css3-alt"></span> with <span class="fab fa-sass"></span> as prepocessor and <span class="fab fa-bootstrap"></span> as framework*After several exercises we turned to <span class="fab fa-js-square"></span> and we started to build more dynamic pages with <span class="fab fa-vuejs"></span> framework\'s help*Then we went deeper into programming, so we started learning <span class="fab fa-php"></span> with its framework <span class="fab fa-laravel"></span> and databases management with <span id="fa-mysql"></span>*At the end of the course we had an exam and I developed, with a team of 5 course mates, a complex web app, including Backend (Authentication, integration of a payment service with Braintree APIs and management of charts with Chart-Js) and Frontend with responsive interface*<span class="fas fa-caret-right"> <b></span> Final project GitHub repo link <a href="https://github.com/danielpellegrini/Bdoctors.git" target="blank">here</a></b> <span class="fas fa-caret-left"></span>'
    const result = par.split('*').join('. <br/>');

    document.getElementById('paragraph').innerHTML = result;
    const image = document.createElement('img');
    image.setAttribute('src', "https://cdn.iconscout.com/icon/free/png-512/mysql-19-1174939.png");
    document.getElementById('fa-mysql').appendChild(image);
    console.log(result);
  },
  methods: {
     expandAbout() {
      document.getElementById("expandAboutLayover").className = "max-width holoContainerLayover";
      document.getElementById("expandAboutContainer").className = "max-width holoContainer";
      document.getElementById("compressAbout").className = "fas fa-compress-arrows-alt";
      document.getElementById("about").className = "increase-about";
      document.getElementById("expandAbout").className = " ";
      document.getElementsByTagName("UL")[0].className = "hidden nav justify-content-center";
      this.$parent.$parent.animationSpeed = 1000000000;
    },
    compressAbout() {
      document.getElementById("expandAboutLayover").className = "holoContainerLayover";
      document.getElementById("expandAboutContainer").className = "holoContainer";
      document.getElementById("expandAbout").className = "fas fa-expand-arrows-alt";
      document.getElementById("about").className = " ";
      document.getElementById("compressAbout").className = " ";
      document.getElementsByTagName("UL")[0].className = "visible nav justify-content-center";
      this.$parent.$parent.animationSpeed = 500;
    }
  },
}
</script>
