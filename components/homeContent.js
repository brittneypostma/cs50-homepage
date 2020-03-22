class Home extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <style>
        #about {
            color: white;
            font-size: 2.5vh;
            text-shadow: 2px 2px 1px black;
            width: 75%;
            margin: 0 auto;
        }

          #about {
            justify-self: center;
          }

          #about::before {
            background: transparent;
          }

          #about:hover::before {
              background: transparent;
          }

          #page {
            position: relative;
            font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
            text-decoration: none;
            text-align: center;
            border-radius: 0.2em;
            margin-left: -5px;
            padding: 2px;
            transform: translateZ(0);
            transition: color 1000ms;
            z-index: 2;
            color: #00C7EE;
          }

        #page::before {
            color: white;
            content: "";
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #2098d1;
            -webkit-transform: scaleX(0);
            transform: scaleX(0);
            -webkit-transform-origin: 0 50%;
            transform-origin: 0 50%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition: 300ms ease-out;
            transition: 300ms ease-out;
        }

        #page:hover::before {
             color:white;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }

          #page:hover {
              color: white;
              box-shadow: 0 2px 1px rgba(0,0,0,.5);
          }

  @media only screen and (max-width: 1000px){
    #about {
      font-size: 2vh;
    }

    </style>

    <div class="homeWrapper">
        <h1>Hello</h1>
        <p id="about">
        I am a mom of 3 wonderful children and we live in the beautiful city of
    Holland, Michigan. I love developing web sites that are beautiful, but
    also fluid, responsive, and easy to use. I thrive on mobile-first
    development with an extensive knowledge of CSS and React with Gatsby, Svelte
    with Sapper, SEO, UX/UI design, and logo design. I love learning about all
    the cool new stuff that comes out in the tech world daily. I also 💖 coffee
    and beer 🍻, well because mom life! I have thoroughly enjoyed taking CS50
    and plan on continuing my journey on constantly learning more ways to code
    fun programs and beautiful websites. This was my attempt at creating a small
    snippet of my original portfolio with web components. You can check it out the
    original <a id="page" href="https://bdesigned.netlify.com/" rel="noopener noreferrer"
    target="_blank">here</a>! Also, checkout my notes site <a id="page"
    href="https://console-logs.netlify.com/" rel="noopener noreferrer" target="_blank">
    Console Logs</a>!
    </p>
    </div>

`
    }
}

window.customElements.define('home-content', Home)