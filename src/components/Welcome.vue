<template>
    <div id="welcomeComponent">


        <div id="welcome-container-top" >
            <div id="more-container" @click="hideWelcome" class="more-container">
              <div id="swipe-up-container">
                <i class="fas fa-angle-up justify-content-center d-flex slide-out-blurred-top"></i>
                <i class="fas fa-angle-up justify-content-center d-flex slide-out-blurred-top2"></i>
                <i class="fas fa-angle-up justify-content-center d-flex slide-out-blurred-top-last"></i>
              <h6>More</h6>
            </div>
          </div>
          <div class="welcome-content-top">
            <div class="welcome">                       
              <span class="text1"></span>  
            </div>

            <div class="welcome">                       
                <span class="text2"></span> 
            </div>
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

        <div id="welcome-container-bottom">
          <div class="welcome-content-bottom">
            <div class="welcome">                
                <span class="text3"></span>                
            </div> 
          </div>

        </div>

    </div>
</template>


<script>
// import VScrollin from 'vue-scrollin'
export default {
    methods: {             
      hideWelcome() {
        document.getElementById("welcome-container-top").className = "slide-out-top";
        document.getElementById("welcome-container-bottom").className = "slide-out-bottom";
        document.getElementById("carousel").className = "hundred carousel-3d-container";              
        document.getElementById("welcomeComponent").className = "hide-welcome";
        document.getElementById("navbar").className = "d-block";
        document.getElementById("navbar").className = "layover";
        document.getElementsByTagName("UL")[0].className = "nav justify-content-center";
        document.getElementById("more-container").className = "hidden";
      },
      hideMore() {
        document.getElementById("more-container").className = "hidden";
      },
      viewMore() {
      document.getElementById("more-container").className = "more-container";
      }
    },

    mounted() {
      this.hideMore();
      setTimeout(() => this.viewMore(), 7000);

        // ——————————————————————————————————————————————————
        // TextScramble
        // ——————————————————————————————————————————————————

        class TextScramble {
          constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}—=+*^?#__'
            this.update = this.update.bind(this)
          }
          setText(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
              const from = oldText[i] || ''
              const to = newText[i] || ''
              const start = Math.floor(Math.random() * 50)
              const end = start + Math.floor(Math.random() * 50)
              this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
          }
          setText1(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
              const from = oldText[i] || ''
              const to = newText[i] || ''
              const start = Math.floor(Math.random() * 50)
              const end = start + Math.floor(Math.random() * 50)
              this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
          }
          setText2(newText) {
            const oldText = this.el.innerText
            const length = Math.max(oldText.length, newText.length)
            const promise = new Promise((resolve) => this.resolve = resolve)
            this.queue = []
            for (let i = 0; i < length; i++) {
              const from = oldText[i] || ''
              const to = newText[i] || ''
              const start = Math.floor(Math.random() * 50)
              const end = start + Math.floor(Math.random() * 50)
              this.queue.push({ from, to, start, end })
            }
            cancelAnimationFrame(this.frameRequest)
            this.frame = 0
            this.update()
            return promise
          }
          update() {
            let output = ''
            let complete = 0
            for (let i = 0, n = this.queue.length; i < n; i++) {
              let { from, to, start, end, char } = this.queue[i]
              if (this.frame >= end) {                
                output += to
              } else if (this.frame >= start) {
                if (!char || Math.random() < 1) {
                  char = this.randomChar()
                  this.queue[i].char = char
                }
                output += `<span class="dud">${char}</span>`
              } else {
                output += from
              }
            }
            this.el.innerHTML = output
            if (complete === this.queue.length) {
              this.resolve()
            } else {
              this.frameRequest = requestAnimationFrame(this.update)
              this.frame++
            }
          }
          randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)]
          }
        }

        // ——————————————————————————————————————————————————
        // Phrases
        // ——————————————————————————————————————————————————

        let phrase1 = [
          'Hi,'
        ]
        const phrase2 = [
          'I am <span>Daniel Pellegrini</span>'
        ]
        const phrase3 = [
          'and I am a <span>Full Stack Web Dev</span>'
        ]

        const el1 = document.querySelector('.text1')
        const el2 = document.querySelector('.text2')
        const el3 = document.querySelector('.text3')
        const fx1 = new TextScramble(el1)
        const fx2 = new TextScramble(el2)
        const fx3 = new TextScramble(el3)

        let counter = 0;

        const next = () => {
          fx1.setText(phrase1[counter]).then(() => {
            next()
          })
          counter = (counter + 1) % phrase1.length
        }

        const next1 = () => {
          fx2.setText1(phrase2[counter]).then(() => {
            next1()
          })
          counter = (counter + 1) % phrase2.length
        }

        const next2 = () => {
          fx3.setText2(phrase3[0]).then(() => {
            next2()
          })
          counter = (counter + 1) % phrase3.length
        }

        
          setTimeout(() => next(), 1500);
          setTimeout(() => next1(), 4000);
          setTimeout(() => next2(), 5500);

    }
}
</script>

