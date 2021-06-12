<template>
    <div id="welcomeComponent">

        <div id="welcome-container-top" @click="hideWelcome" >
            <div class="welcome">             
                <div class="text1"></div>
                <div class="text2"></div>            
                <div class="text3"></div>            

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
                
             
                
            </div> 

        </div>

    </div>
</template>


<script>
// import VScrollin from 'vue-scrollin'
export default {
    components: {
        // VScrollin
    },
    methods: {
       
        hideWelcome() {
            document.getElementById("welcome-container-top").className = "slide-out-top";
            document.getElementById("welcome-container-bottom").className = "slide-out-bottom";
            document.getElementById("carousel").className = "hundred carousel-3d-container";              
            document.getElementById("welcomeComponent").className = "hideWelcome";
            document.getElementById("navbar").className = "d-block";
            document.getElementById("navbar").className = "layover";
            document.getElementsByTagName("UL")[0].className = "nav justify-content-center";
        }    
    },
    mounted() {
        // ——————————————————————————————————————————————————
        // TextScramble
        // ——————————————————————————————————————————————————

        class TextScramble {
          constructor(el) {
            this.el = el
            this.chars = '!<>-_\\/[]{}—=+*^?#________'
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
              const start = Math.floor(Math.random() * 80)
              const end = start + Math.floor(Math.random() * 80)
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
                if (!char || Math.random() < 0.88) {
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
        // Example
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

        let counter1 = 0
        let counter2 = 0
        let counter3 = 0
        const next = () => {
          fx1.setText(phrase1[counter1]).then(() => {
            setTimeout(next, 80)
          })
          fx2.setText(phrase2[counter2]).then(() => {
            setTimeout(next, 200)
          })
          fx3.setText(phrase3[counter3]).then(() => {
            setTimeout(next, 5000)
          })
          counter1 = (counter1 + 1) % phrase1.length
          counter2 = (counter2 + 1) % phrase2.length
          counter3 = (counter3 + 1) % phrase3.length
        }

        next()

    }
}
</script>

