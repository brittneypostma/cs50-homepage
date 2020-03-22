class Footer extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<style>
    footer {
        background-color: transparent;
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px;
        color: #eee;
        justify-items: center;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        line-height: 1;
    }


  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    transition: translateY(-50%);
    text-align: center;
    font-style: italic;
    letter-spacing: 5px;
    background: linear-gradient(#262626, #ffffff, #262626);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 12.5%;
    bottom: 0;
    top: 40px;
    width: 75%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  p:hover::before {
    background: rgb(168, 168, 168);
    transform: scaleX(0.1);
  }

  .links {
    margin: 0 10px;
    padding: 2px;
    border-radius: 5px;
    transition: .5s ease;
  }

  .links:hover {
    background-color: rgb(0,255,255,0.3);
  }
</style>

<footer>
  <a
    class="links"
    href="https://www.facebook.com/b.Designed11/"
    rel="noopener noreferrer"
    target="_blank">
    <img src="./images/icons/facebook.png" alt="facebook" />
  </a>
  <a
    class="links"
    href="https://twitter.com/BrittneyPostma"
    rel="noopener noreferrer"
    target="_blank">
    <img src="./images/icons/twitter.png" alt="twitter" />
  </a>
  <p>b.Designed</p>
  <a
    class="links"
    href="https://www.linkedin.com/in/brittney-postma-868928178/"
    rel="noopener noreferrer"
    target="_blank">
    <img src="./images/icons/linkedin.png" alt="linkedin" />
  </a>
  <a
    class="links"
    href="https://github.com/sballgirl11"
    rel="noopener noreferrer"
    target="_blank">
    <img src="./images/icons/github.png" alt="github" />
  </a>
</footer>

        `
    }
}

window.customElements.define('app-footer', Footer)

